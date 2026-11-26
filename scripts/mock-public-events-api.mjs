// Simulador local de `GET /api/v1/public/events/:slug` (contrato: §6.1 de docs/ride_check_plan.md de la API).
//
// Sirve para desarrollar y revisar la página /e/<slug> mientras la API real no responde, y para probar los casos
// que la API real casi nunca da (sin flyer, sin cifras, flyer pesado, error 500, respuesta lenta).
//
//   pnpm mock:events                                                    # en una terminal
//   RODARLIBRE_API_URL=http://127.0.0.1:4010/api/v1 pnpm dev            # en otra
//
// No forma parte del sitio: nada en src/ lo importa y no entra al build. Los datos son de ejemplo (todo título dice
// «ejemplo»), con las mismas llaves que el contrato y ninguna más. Escucha solo en 127.0.0.1.

import crypto from "node:crypto"
import fs from "node:fs"
import http from "node:http"
import path from "node:path"
import { Buffer } from "node:buffer"
import { setTimeout as sleep } from "node:timers/promises"
import { fileURLToPath, URL } from "node:url"
import zlib from "node:zlib"

const PORT = Number(process.env.PORT || 4010)
const ORIGIN = `http://127.0.0.1:${PORT}`
const PUBLIC_DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "public")

// --- Imágenes: dos del propio sitio y dos PNG generados aquí (sin dependencias ni archivos binarios nuevos) ---

function chunk(type, data) {
  const length = Buffer.alloc(4)
  length.writeUInt32BE(data.length)
  const body = Buffer.concat([Buffer.from(type), data])
  const crc = Buffer.alloc(4)
  crc.writeUInt32BE(zlib.crc32(body) >>> 0)
  return Buffer.concat([length, body, crc])
}

function png(width, height, pixel) {
  const stride = width * 3 + 1
  const raw = Buffer.alloc(stride * height)
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const [r, g, b] = pixel(x, y)
      raw[y * stride + 1 + x * 3] = r
      raw[y * stride + 2 + x * 3] = g
      raw[y * stride + 3 + x * 3] = b
    }
  }
  const header = Buffer.alloc(13)
  header.writeUInt32BE(width, 0)
  header.writeUInt32BE(height, 4)
  header[8] = 8 // 8 bits por canal
  header[9] = 2 // RGB
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk("IHDR", header),
    chunk("IDAT", zlib.deflateSync(raw)),
    chunk("IEND", Buffer.alloc(0)),
  ])
}

const assets = {
  "/assets/flyer.jpg": { type: "image/jpeg", data: () => fs.readFileSync(path.join(PUBLIC_DIR, "libres_en_2_ruedas.jpeg")) },
  "/assets/logo.jpg": { type: "image/jpeg", data: () => fs.readFileSync(path.join(PUBLIC_DIR, "allies", "nomadas_urbanos.jpg")) },
  // Flyer vertical (4:5) de unos pocos KB: franjas diagonales verdes sobre negro.
  "/assets/flyer-vertical.png": {
    type: "image/png",
    data: () => png(1080, 1350, (x, y) => (((x + y) >> 6) % 2 === 0 ? [16, 24, 20] : [31, 168, 85])),
  },
  // Ruido puro: no se comprime, pesa más de 1 MB y debe quedar fuera de la tarjeta.
  "/assets/flyer-pesado.png": { type: "image/png", data: () => png(700, 600, () => [...crypto.randomBytes(3)]) },
}
const cache = new Map()
function asset(pathname) {
  if (!assets[pathname]) {
    return null
  }
  if (!cache.has(pathname)) {
    cache.set(pathname, assets[pathname].data())
  }
  return { type: assets[pathname].type, data: cache.get(pathname) }
}

// --- Rodadas de ejemplo: exactamente las llaves de §6.1 ---

const organizer = {
  name: "Nómadas Urbanos",
  slug: "nomadas-urbanos",
  kind: "club",
  logo_url: `${ORIGIN}/assets/logo.jpg`,
  instagram_url: "https://www.instagram.com/rodarlibre.co/",
}

const events = {
  // Rodada por venir, completa. Las cifras llegan como Rails las entrega: decimales en texto.
  "rodada-mensual-a-san-cayetano-69": {
    slug: "rodada-mensual-a-san-cayetano-69",
    title: "Rodada mensual a San Cayetano (ejemplo)",
    description:
      "Salimos a las 6:30 a. m., puntuales.\nTramo de destapado hacia el final, lleva el casco y los guantes.\n\nTrae hidratación y el SOAT al día.",
    starts_at: "2026-12-06T06:30:00-05:00",
    ends_at: "2026-12-06T15:00:00-05:00",
    past: false,
    meeting_point: "Estación de servicio en la Autopista Norte (ejemplo)",
    map_url: "https://www.google.com/maps/search/?api=1&query=Autopista+Norte+Bogot%C3%A1",
    city: "Bogotá",
    distance_km: "80.0",
    entry_fee: "50000.0",
    image_url: `${ORIGIN}/assets/flyer.jpg`,
    registration_url: null,
    going_count: 12,
    app_path: "/events/69",
    organizer,
  },
  // Lo mínimo que puede traer una rodada: sin flyer, sin cifras, sin descripción, sin conteo, sin logo del club.
  "rodada-sin-datos-70": {
    slug: "rodada-sin-datos-70",
    title: "Rodada con un nombre muy largo para ver cómo parte las líneas en un teléfono (ejemplo)",
    description: null,
    starts_at: "2026-12-20T14:00:00Z",
    ends_at: null,
    past: false,
    meeting_point: null,
    map_url: null,
    city: null,
    distance_km: null,
    entry_fee: null,
    image_url: null,
    registration_url: null,
    going_count: null,
    app_path: "/events/70",
    organizer: { ...organizer, logo_url: null, instagram_url: null },
  },
  // Flyer vertical, texto con HTML (debe verse como texto), inscripción y conteo en el mínimo (3). Hora en UTC.
  "rodada-con-flyer-vertical-71": {
    slug: "rodada-con-flyer-vertical-71",
    title: "Rodada con flyer vertical (ejemplo)",
    description:
      "<b>Esto no es negrita</b> y <script>alert('no')</script> tampoco corre.\nSegunda línea.\n\n\n\nTercera, tras un hueco largo.",
    starts_at: "2026-12-13T12:00:00Z",
    ends_at: "2026-12-13T20:00:00Z",
    past: false,
    meeting_point: "Parque principal de Sopó (ejemplo)",
    map_url: "https://www.google.com/maps/search/?api=1&query=Sop%C3%B3",
    city: "Sopó",
    distance_km: 42.5,
    entry_fee: 0,
    image_url: `${ORIGIN}/assets/flyer-vertical.png`,
    registration_url: "https://example.com/inscripcion",
    going_count: 3,
    app_path: "/events/71",
    organizer,
  },
  // Flyer de más de 1 MB: la tarjeta debe usar la imagen del sitio, la página sí muestra el flyer.
  "rodada-con-flyer-pesado-72": {
    slug: "rodada-con-flyer-pesado-72",
    title: "Rodada con flyer pesado (ejemplo)",
    description: "Prueba del flyer de más de 600 KB.",
    starts_at: "2026-12-27T07:00:00-05:00",
    ends_at: null,
    past: false,
    meeting_point: "Peaje de Patios (ejemplo)",
    map_url: null,
    city: "Bogotá",
    distance_km: 120,
    entry_fee: "35000.0",
    image_url: `${ORIGIN}/assets/flyer-pesado.png`,
    registration_url: null,
    going_count: null,
    app_path: "/events/72",
    organizer,
  },
  // Rodada que ya pasó.
  "rodada-pasada-60": {
    slug: "rodada-pasada-60",
    title: "Rodada de noviembre a La Calera (ejemplo)",
    description: "Ya rodamos. Gracias a todos por venir.",
    starts_at: "2026-11-08T07:00:00-05:00",
    ends_at: "2026-11-08T14:00:00-05:00",
    past: true,
    meeting_point: "Calle 100 con carrera 7 (ejemplo)",
    map_url: "https://www.google.com/maps/search/?api=1&query=Calle+100+Bogot%C3%A1",
    city: "Bogotá",
    distance_km: "60.0",
    entry_fee: "30000.0",
    image_url: `${ORIGIN}/assets/flyer.jpg`,
    registration_url: "https://example.com/inscripcion",
    going_count: 25,
    app_path: "/events/60",
    organizer,
  },
}

// --- Servidor ---

function send(res, status, body, headers = {}) {
  res.writeHead(status, { "Content-Length": Buffer.byteLength(body), ...headers })
  res.end(body)
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url ?? "/", ORIGIN)
  const method = req.method ?? "GET"

  const file = asset(url.pathname)
  if (file) {
    res.writeHead(200, { "Content-Type": file.type, "Content-Length": file.data.length, "Cache-Control": "public, max-age=60" })
    res.end(method === "HEAD" ? undefined : file.data)
    return
  }

  const match = url.pathname.match(/^\/api\/v1\/public\/events\/([^/]+)$/)
  if (method === "GET" && match) {
    const slug = decodeURIComponent(match[1])
    process.stdout.write(`GET ${url.pathname}\n`)
    if (slug === "error-de-servidor") {
      send(res, 500, JSON.stringify({ error: "internal_server_error" }), { "Content-Type": "application/json" })
    } else if (slug === "respuesta-invalida") {
      send(res, 200, JSON.stringify({ hola: "mundo" }), { "Content-Type": "application/json" })
    } else if (slug === "respuesta-lenta") {
      await sleep(8000)
      send(res, 200, JSON.stringify(events["rodada-mensual-a-san-cayetano-69"]), { "Content-Type": "application/json" })
    } else if (events[slug]) {
      send(res, 200, JSON.stringify(events[slug]), {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=300",
      })
    } else {
      send(res, 404, JSON.stringify({ error: "not_found" }), { "Content-Type": "application/json" })
    }
    return
  }

  send(res, 404, JSON.stringify({ error: "not_found" }), { "Content-Type": "application/json" })
})

server.listen(PORT, "127.0.0.1", () => {
  process.stdout.write(`Simulador de la API de rodadas en ${ORIGIN}/api/v1\n`)
  process.stdout.write("Rodadas: " + Object.keys(events).join(", ") + "\n")
  process.stdout.write("Fallos:  error-de-servidor, respuesta-invalida, respuesta-lenta (8 s). Cualquier otro: 404.\n")
})
