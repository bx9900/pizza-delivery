<template>
  <div class="app-layout">
    <header class="header">
      <div class="container">
        <NuxtLink :to="localePath('/')" class="logo">🍕 PizzaExpress</NuxtLink>
        <nav class="nav">
          <NuxtLink :to="localePath('/')">{{ $t('nav.home') }}</NuxtLink>
          <NuxtLink :to="localePath('/menu')">{{ $t('nav.menu') }}</NuxtLink>
          <NuxtLink :to="localePath('/order')">{{ $t('nav.order') }}</NuxtLink>
          <NuxtLink :to="localePath('/about')">{{ $t('nav.about') }}</NuxtLink>
        </nav>
        <div class="lang-switcher">
          <NuxtLink
            v-for="locale in availableLocales"
            :key="locale.code"
            :to="switchLocalePath(locale.code)"
            class="lang-link"
            :class="{ active: locale.code === currentLocale }"
          >
            {{ locale.name }}
          </NuxtLink>
        </div>
      </div>
    </header>

    <main class="main container">
      <slot />
    </main>

    <footer class="footer">
      <div class="container">
        <p>© 2025 PizzaExpress — {{ $t('footer.tagline') }}</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const { locale, locales } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()

const currentLocale = computed(() => locale.value)
const availableLocales = computed(() => locales.value)
</script>

<style>
:root {
  --color-primary: #e63946;
  --color-secondary: #f4a261;
  --color-bg: #fff8f0;
  --color-text: #2d2d2d;
  --color-muted: #6b7280;
  --radius: 12px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: system-ui, -apple-system, sans-serif;
  background: var(--color-bg);
  color: var(--color-text);
  line-height: 1.6;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header .container {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.logo {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--color-primary);
  text-decoration: none;
}

.nav {
  display: flex;
  gap: 1.5rem;
}

.nav a {
  text-decoration: none;
  color: var(--color-text);
  font-weight: 500;
  transition: color 0.2s;
}

.nav a:hover,
.nav a.router-link-active {
  color: var(--color-primary);
}

.lang-switcher {
  margin-left: auto;
  display: flex;
  gap: 0.5rem;
}

.lang-link {
  text-decoration: none;
  padding: 0.25rem 0.75rem;
  border-radius: 6px;
  font-size: 0.85rem;
  color: var(--color-muted);
  border: 1px solid transparent;
  transition: all 0.2s;
}

.lang-link.active {
  color: var(--color-primary);
  border-color: var(--color-primary);
  background: rgba(230, 57, 70, 0.05);
}

.main {
  flex: 1;
  padding: 2rem 1.5rem;
}

.footer {
  background: var(--color-text);
  color: white;
  text-align: center;
  padding: 1.5rem 0;
  margin-top: auto;
}
</style>
