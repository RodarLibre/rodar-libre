/**
 * La rodada pública (`/e/<slug>`): lectura de `GET <API>/public/events/<slug>` y los textos que se arman con ella.
 * Contrato: §6.1 de docs/ride_check_plan.md del repositorio de la API (rodarlibre-api-rails).
 *
 * Solo se usa en el servidor: la página se renderiza en cada petición y el CDN guarda la respuesta unos minutos.
 */

const PRODUCTION_API_URL = "https://api.rodarlibre.co/api/v1"
const STAGING_API_URL = "https://api-staging.rodarlibre.co/api/v1"

/** Cuánto esperamos a la API antes de decir que no está disponible. */
const API_TIMEOUT_MS = 4000
/** Cuánto esperamos para medir el flyer (solo decide la imagen de la tarjeta; si tarda, se usa el flyer). */
const FLYER_CHECK_TIMEOUT_MS = 1500
/**
 * Peso máximo del flyer para usarlo como imagen de la tarjeta de WhatsApp. Meta documenta menos de 600 KB
 * (developers.facebook.com/documentation/business-messaging/whatsapp/link-previews); varios reportes de la
 * comunidad hablan de 300 KB. Si la tarjeta sale sin imagen con un flyer de 300 a 600 KB, bájalo a 300 * 1024.
 */
export const FLYER_MAX_BYTES = 600 * 1024

// Lo que `Rails parameterize` produce: minúsculas, números y guiones. Cualquier otra cosa es un 404 sin llamar a la API.
const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
const SLUG_MAX_LENGTH = 120

export interface PublicEventOrganizer {
  name: string
  slug: string | null
  kind: string | null
  logoUrl: string | null
  instagramUrl: string | null
}

export interface PublicEvent {
  slug: string
  title: string
  description: string | null
  startsAt: Date
  endsAt: Date | null
  past: boolean
  meetingPoint: string | null
  mapUrl: string | null
  city: string | null
  distanceKm: number | null
  entryFee: number | null
  imageUrl: string | null
  registrationUrl: string | null
  /** `null` por debajo de 3: la API no cuenta a quien va solo. */
  goingCount: number | null
  appPath: string | null
  organizer: PublicEventOrganizer | null
}

export type PublicEventResult =
  | { status: "ok"; event: PublicEvent }
  | { status: "not_found" }
  | { status: "unavailable" }

export function isValidSlug(slug: unknown): slug is string {
  return typeof slug === "string" && slug.length <= SLUG_MAX_LENGTH && SLUG_PATTERN.test(slug)
}

function isLoopbackHost(hostname: string): boolean {
  return hostname === "localhost" || hostname === "127.0.0.1" || hostname === "[::1]"
}

/**
 * URL base de la API. `RODARLIBRE_API_URL` manda; si no está, se deduce del entorno de Vercel: producción usa la
 * API de producción y las previews la de staging. En local no hay valor por defecto: se apunta a una API o al
 * simulador de scripts/mock-public-events-api.mjs.
 */
export function getApiBaseUrl(): string | null {
  const vercelEnv = process.env.VERCEL_ENV
  const configured = process.env.RODARLIBRE_API_URL?.trim()
  const candidate =
    configured || (vercelEnv === "production" ? PRODUCTION_API_URL : vercelEnv === "preview" ? STAGING_API_URL : "")
  if (!candidate) {
    return null
  }
  try {
    const url = new URL(candidate)
    // http solo contra la propia máquina; cualquier otra API va por https.
    if (url.protocol !== "https:" && !(url.protocol === "http:" && isLoopbackHost(url.hostname))) {
      return null
    }
    return candidate.replace(/\/+$/, "")
  } catch {
    return null
  }
}

/**
 * Solo enlaces http(s). Un http:// que no es de la propia máquina se sube a https://; cualquier otro esquema
 * (javascript:, data:, etc.) se descarta, así que nada de lo que venga de la API puede ejecutar código desde un href.
 */
export function safeUrl(value: unknown): string | null {
  if (typeof value !== "string" || value.trim() === "") {
    return null
  }
  try {
    const url = new URL(value.trim())
    if (url.protocol === "http:" && !isLoopbackHost(url.hostname)) {
      url.protocol = "https:"
    }
    if (url.protocol === "https:" || (url.protocol === "http:" && isLoopbackHost(url.hostname))) {
      return url.href
    }
  } catch {
    // no es una URL
  }
  return null
}

function text(value: unknown): string | null {
  return typeof value === "string" && value.trim() !== "" ? value : null
}

/** Acepta número o texto numérico (Rails entrega los decimales como "50000.0"). */
function numberOrNull(value: unknown): number | null {
  if (value === null || value === undefined || value === "") {
    return null
  }
  const n = typeof value === "number" ? value : Number(value)
  return Number.isFinite(n) ? n : null
}

function dateOrNull(value: unknown): Date | null {
  if (typeof value !== "string") {
    return null
  }
  const date = new Date(value)
  return Number.isNaN(date.getTime()) ? null : date
}

function parseOrganizer(raw: unknown): PublicEventOrganizer | null {
  if (!raw || typeof raw !== "object") {
    return null
  }
  const o = raw as Record<string, unknown>
  const name = text(o.name)
  if (!name) {
    return null
  }
  return {
    name,
    slug: text(o.slug),
    kind: text(o.kind),
    logoUrl: safeUrl(o.logo_url),
    instagramUrl: safeUrl(o.instagram_url),
  }
}

/** Valida lo mínimo para dibujar la página (título y fecha); lo demás es opcional y se ignora si viene raro. */
export function parsePublicEvent(json: unknown): PublicEvent | null {
  if (!json || typeof json !== "object") {
    return null
  }
  let raw = json as Record<string, unknown>
  // Tolera la respuesta envuelta en `event`.
  if (!("title" in raw) && raw.event && typeof raw.event === "object") {
    raw = raw.event as Record<string, unknown>
  }
  const slug = text(raw.slug)
  const title = text(raw.title)
  const startsAt = dateOrNull(raw.starts_at)
  if (!slug || !title || !startsAt) {
    return null
  }
  const goingCount = numberOrNull(raw.going_count)
  return {
    slug,
    title,
    description: text(raw.description),
    startsAt,
    endsAt: dateOrNull(raw.ends_at),
    past: raw.past === true,
    meetingPoint: text(raw.meeting_point),
    mapUrl: safeUrl(raw.map_url),
    city: text(raw.city),
    distanceKm: numberOrNull(raw.distance_km),
    entryFee: numberOrNull(raw.entry_fee),
    imageUrl: safeUrl(raw.image_url),
    registrationUrl: safeUrl(raw.registration_url),
    goingCount: goingCount !== null && goingCount >= 0 ? Math.floor(goingCount) : null,
    appPath: text(raw.app_path),
    organizer: parseOrganizer(raw.organizer),
  }
}

/** Pide la rodada a la API. Nunca lanza: todo lo que no sea una rodada válida o un 404 es "unavailable". */
export async function fetchPublicEvent(slug: string): Promise<PublicEventResult> {
  if (!isValidSlug(slug)) {
    return { status: "not_found" }
  }
  const base = getApiBaseUrl()
  if (!base) {
    console.error("[rodada] Falta RODARLIBRE_API_URL (o VERCEL_ENV) y no hay API a la que preguntar.")
    return { status: "unavailable" }
  }
  try {
    const response = await fetch(`${base}/public/events/${encodeURIComponent(slug)}`, {
      headers: { Accept: "application/json" },
      signal: AbortSignal.timeout(API_TIMEOUT_MS),
    })
    if (response.status === 404) {
      return { status: "not_found" }
    }
    if (!response.ok) {
      console.error(`[rodada] La API respondió ${response.status} para ${slug}.`)
      return { status: "unavailable" }
    }
    const event = parsePublicEvent(await response.json())
    if (!event) {
      console.error(`[rodada] La API respondió algo que no es una rodada para ${slug}.`)
      return { status: "unavailable" }
    }
    return { status: "ok", event }
  } catch (error) {
    console.error(`[rodada] No se pudo leer la API para ${slug}:`, error instanceof Error ? error.message : error)
    return { status: "unavailable" }
  }
}

/**
 * ¿Sirve el flyer como imagen de la tarjeta? Una petición HEAD con tiempo límite: si el archivo no existe, no es una
 * imagen común o pesa más de FLYER_MAX_BYTES, la tarjeta usa la imagen del sitio. Si no se puede medir, se usa el flyer.
 */
export async function flyerFitsCard(url: string): Promise<boolean> {
  try {
    const response = await fetch(url, { method: "HEAD", signal: AbortSignal.timeout(FLYER_CHECK_TIMEOUT_MS) })
    if (response.status === 404 || response.status === 410) {
      return false
    }
    if (!response.ok) {
      return true
    }
    const type = response.headers.get("content-type")
    if (type && !/^image\/(jpeg|png|webp|gif)\b/i.test(type)) {
      return false
    }
    const length = Number(response.headers.get("content-length"))
    return !(Number.isFinite(length) && length > FLYER_MAX_BYTES)
  } catch {
    return true
  }
}

// Espacio duro: evita que «a. m.» o «80 km» se partan entre dos líneas.
const NBSP = String.fromCodePoint(0xa0)

const BOGOTA = "America/Bogota"

const dayFormat = new Intl.DateTimeFormat("es-CO", {
  timeZone: BOGOTA,
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
})
const hourFormat = new Intl.DateTimeFormat("es-CO", {
  timeZone: BOGOTA,
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
})

function parts(format: Intl.DateTimeFormat, date: Date): Record<string, string> {
  return Object.fromEntries(format.formatToParts(date).map((part) => [part.type, part.value]))
}

/** «domingo 6 de diciembre de 2026», en hora de Bogotá. */
export function formatDay(date: Date): string {
  const p = parts(dayFormat, date)
  return `${p.weekday} ${p.day} de ${p.month} de ${p.year}`
}

/** «6:30 a. m.», en hora de Bogotá. `null` a medianoche en punto: se toma como evento sin hora. */
export function formatHour(date: Date): string | null {
  const p = parts(hourFormat, date)
  if (p.hour === "12" && p.minute === "00" && p.dayPeriod?.replace(/\s/g, "").toLowerCase() === "a.m.") {
    return null
  }
  return `${p.hour}:${p.minute} ${p.dayPeriod.replace(/\s+/g, NBSP)}`
}

export function capitalize(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1)
}

const kmFormat = new Intl.NumberFormat("es-CO", { maximumFractionDigits: 1 })
const copFormat = new Intl.NumberFormat("es-CO", { maximumFractionDigits: 0 })

/** «80 km», o `null` si no hay distancia. */
export function formatDistance(km: number | null): string | null {
  return km !== null && km > 0 ? `${kmFormat.format(km)}${NBSP}km` : null
}

/** «$50.000», o `null` si no hay aporte (cero o vacío se trata como "sin dato", no como "gratis"). */
export function formatFee(fee: number | null): string | null {
  return fee !== null && fee > 0 ? `$${copFormat.format(fee)}` : null
}

/** Texto corto para la tarjeta del enlace: el día, la hora, el punto de encuentro y el club. Nunca vacío. */
export function cardDescription(event: PublicEvent): string {
  const hour = formatHour(event.startsAt)
  const when = capitalize(formatDay(event.startsAt)) + (hour ? `, ${hour.replaceAll(NBSP, " ")}` : "")
  const pieces = event.past
    ? ["Esta rodada ya pasó", when, event.organizer?.name]
    : [when, event.meetingPoint, event.organizer?.name]
  const description = pieces.filter(Boolean).join(" · ")
  return description.length > 200 ? `${description.slice(0, 197).trimEnd()}…` : description
}

/** El enlace que abre la app: el esquema propio más la ruta que entrega la API. `null` si la API no da ruta. */
export function appLink(appPath: string | null): string | null {
  if (!appPath) {
    return null
  }
  const path = appPath.replace(/^\/+/, "")
  return /^[A-Za-z0-9\-._~!$&'()*+,;=:@/%?#]*$/.test(path) && path !== "" ? `rodarlibre://${path}` : null
}
