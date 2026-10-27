import { defineConfig, fontProviders } from "astro/config"
import react from "@astrojs/react"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  site: process.env.SITE_URL || "https://rodarlibre.co",
  integrations: [react()],
  redirects: {
    "/aliados": "/#aliados",
  },
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
