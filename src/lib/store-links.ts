/**
 * Enlaces a las tiendas. Son los mismos que usa src/pages/index.astro; aquí además se arman con el origen de la
 * visita (la rodada desde la que llegó), para contar instalaciones en las consolas de cada tienda.
 */

export const APP_STORE_URL = "https://apps.apple.com/co/app/rodar-libre-soat-y-multas/id6762035476"
export const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.rodarlibre"

const SOURCE = "rodarlibre_web"
const MEDIUM = "ride_page"

/**
 * Google Play: `referrer` lleva, codificado como URL, el texto «utm_source=…&utm_medium=…&utm_campaign=…».
 * La consola de Play lo muestra en la adquisición de usuarios, con la rodada como campaña.
 */
export function googlePlayUrlForRide(slug: string): string {
  const referrer = new URLSearchParams({ utm_source: SOURCE, utm_medium: MEDIUM, utm_campaign: slug }).toString()
  const url = new URL(GOOGLE_PLAY_URL)
  url.searchParams.set("referrer", referrer)
  return url.href
}

/**
 * App Store: `ct` es el token de campaña (hasta 100 caracteres) y `mt=8` el tipo de medio. Apple solo cuenta la
 * campaña en App Analytics si el enlace también lleva `pt`, el token de proveedor de la cuenta de App Store
 * Connect. No se inventa: viene de APP_STORE_PROVIDER_TOKEN y, sin él, el enlace queda con `ct` y `mt`.
 */
export function appStoreUrlForRide(slug: string, providerToken = process.env.APP_STORE_PROVIDER_TOKEN): string {
  const url = new URL(APP_STORE_URL)
  const token = providerToken?.trim()
  if (token && /^\d+$/.test(token)) {
    url.searchParams.set("pt", token)
  }
  url.searchParams.set("ct", slug.slice(0, 100))
  url.searchParams.set("mt", "8")
  return url.href
}
