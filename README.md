# 🍕 PizzaExpress — Nuxt Demo App

A pizza delivery app built with Nuxt 3 to demonstrate key framework features.

## Features Demonstrated

| Feature | Where |
|---------|-------|
| **SSR (Server-Side Rendering)** | All pages render on the server by default |
| **SSG (Static Site Generation)** | `/about` page is pre-rendered at build time via `routeRules` |
| **i18n (English + Spanish)** | Full locale switching with `@nuxtjs/i18n`, lazy-loaded translations |
| **Server API Routes** | `server/api/specials.get.ts` — a Nitro server endpoint |
| **Composables** | `composables/useCart.ts` — shared state across pages |
| **File-based Routing** | Pages auto-registered from `pages/` directory |
| **Layouts** | Shared header/footer via `layouts/default.vue` |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for Production

```bash
npm run build
node .output/server/index.mjs
```

## Generate Static Site

```bash
npm run generate
npx serve .output/public
```

## Project Structure

```
pizza-delivery/
├── app.vue                  # Root component
├── nuxt.config.ts           # Nuxt configuration (i18n, routeRules)
├── layouts/
│   └── default.vue          # App shell with nav + language switcher
├── pages/
│   ├── index.vue            # Home (SSR)
│   ├── menu.vue             # Pizza menu (SSR)
│   ├── order.vue            # Order form with cart (SSR)
│   └── about.vue            # About page (SSG — pre-rendered)
├── composables/
│   └── useCart.ts           # Shared cart state
├── server/
│   └── api/
│       └── specials.get.ts  # Server API endpoint
└── i18n/
    └── locales/
        ├── en.json          # English translations
        └── es.json          # Spanish translations
```
