import { defineConfig, fontProviders } from "astro/config"
import react from "@astrojs/react"
import tailwindcss from "@tailwindcss/vite"
import vercel from "@astrojs/vercel"

// Salida "static" (por defecto): todas las páginas se generan en el build. Solo las rutas que declaran
// `export const prerender = false` (hoy, /e/[slug]) se renderizan en cada petición, en una función de Vercel.
export default defineConfig({
  site: process.env.SITE_URL || "https://rodarlibre.co",
  adapter: vercel(),
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      name: "Montserrat",
      cssVariable: "--font-montserrat",
      provider: fontProviders.google(),
      weights: [400, 600, 700, 900],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["sans-serif"],
    },
    {
      name: "Open Sans",
      cssVariable: "--font-open-sans",
      provider: fontProviders.google(),
      weights: [400, 500, 600],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["sans-serif"],
    },
  ],
})
