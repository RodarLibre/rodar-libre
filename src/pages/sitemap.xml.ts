import type { APIRoute } from "astro"

/** Páginas que no deben aparecer en buscadores (llevan noindex en su <head>). */
const EXCLUDED = new Set(["og-test", "404"])

// Las páginas se descubren en build: una página nueva en src/pages entra sola al sitemap.
const pageFiles = Object.keys(import.meta.glob("./*.astro"))

export const GET: APIRoute = ({ site }) => {
  const paths = pageFiles
    .map((file) => file.replace(/^\.\//, "").replace(/\.astro$/, ""))
    .filter((name) => !EXCLUDED.has(name))
    .map((name) => (name === "index" ? "/" : `/${name}`))
    .sort()

  const urls = paths.map((path) => `  <url><loc>${new URL(path, site).href}</loc></url>`).join("\n")
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`

  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } })
}
