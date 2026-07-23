// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

const SITE = process.env.PUBLIC_SITE_URL || "https://rodarlibre.co";

// https://astro.build/config
export default defineConfig({
  site: SITE,
  output: "static",
  trailingSlash: "ignore",
  build: {
    format: "directory",
  },
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": new URL("./src", import.meta.url).pathname,
      },
    },
  },
  redirects: {
    "/aliados": "/#aliados",
  },
});
