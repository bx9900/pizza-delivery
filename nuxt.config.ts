import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)

export default defineNuxtConfig({
  compatibilityDate: '2025-05-13',
  devtools: { enabled: true },

  modules: ['@nuxtjs/i18n'],

  i18n: {
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'es', name: 'Español', file: 'es.json' },
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: 'locales/',
    strategy: 'prefix_except_default',
  },

  routeRules: {
    // SSG: pre-render the about page at build time
    '/about': { prerender: true },
  },

  nitro: {
    preset: require.resolve('@omega/nuxt-adapter'),
  },
})
