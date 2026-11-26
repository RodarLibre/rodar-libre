# Rodar Libre Logo

*Automatically synced with your [v0.app](https://v0.app) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/roadevs-projects/v0-rodar-libre-logo)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/projects/lWljUCXvRVN)

## Desarrollo

Sitio estático construido con [Astro](https://astro.build) (islas de React para el navbar, el carrusel y el video del hero) y Tailwind CSS 4.

```bash
pnpm install
pnpm dev       # servidor de desarrollo
pnpm build     # genera dist/
pnpm preview   # sirve dist/ localmente
```

### Salida: estática, salvo la rodada

Todas las páginas se generan en el build, como siempre. La única excepción es `/e/[slug]` (`src/pages/e/[slug].astro`),
la página pública de una rodada: se renderiza en cada petición, con el [adaptador de Vercel](https://docs.astro.build/en/guides/integrations-guide/vercel/),
porque el rastreador de WhatsApp no ejecuta JavaScript y la tarjeta del enlace (`og:*`) tiene que venir ya en el HTML.
El CDN guarda la respuesta 5 minutos (`s-maxage=300`); un 404 se guarda 1 minuto y un error de la API no se guarda.

La página lee `GET <API>/public/events/<slug>` (contrato: §6.1 de `docs/ride_check_plan.md` del repositorio de la API).

| Variable | Para qué | Valores |
| --- | --- | --- |
| `RODARLIBRE_API_URL` | URL base de la API | Producción: `https://api.rodarlibre.co/api/v1`. Previews: `https://api-staging.rodarlibre.co/api/v1`. Si falta, se deduce de `VERCEL_ENV` (producción → producción, preview → staging); en local no hay valor por defecto |
| `APP_STORE_PROVIDER_TOKEN` | Opcional. Token de proveedor (`pt`) de App Store Connect; sin él los enlaces de App Store llevan `ct` y `mt` pero Apple no cuenta la campaña | Número, de App Store Connect → App Analytics → Campañas → Enlaces de campaña |

Para trabajar sin la API real, `scripts/mock-public-events-api.mjs` simula el endpoint (rodadas por venir, sin datos, con flyer
vertical o pesado, ya pasada, y fallos). No es parte del sitio: nada en `src/` lo importa y no entra al build.

```bash
pnpm mock:events                                              # simulador en http://127.0.0.1:4010
RODARLIBRE_API_URL=http://127.0.0.1:4010/api/v1 pnpm dev      # otra terminal; abre /e/rodada-mensual-a-san-cayetano-69
```

`astro build` y `astro dev` piden Node 22.23.4 o superior.

## Overview

This repository will stay in sync with your deployed chats on [v0.app](https://v0.app).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.app](https://v0.app).

## Deployment

Your project is live at:

**[https://vercel.com/roadevs-projects/v0-rodar-libre-logo](https://vercel.com/roadevs-projects/v0-rodar-libre-logo)**

## Build your app

Continue building your app on:

**[https://v0.app/chat/projects/lWljUCXvRVN](https://v0.app/chat/projects/lWljUCXvRVN)**

## How It Works

1. Create and modify your project using [v0.app](https://v0.app)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository
