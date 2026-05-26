<template>
  <div class="home">
    <section class="hero">
      <h1>{{ $t('home.hero_title') }}</h1>
      <p class="hero-subtitle">{{ $t('home.hero_subtitle') }}</p>
      <NuxtLink :to="localePath('/menu')" class="btn btn-primary">
        {{ $t('home.cta') }} →
      </NuxtLink>
    </section>

    <section class="features">
      <h2>{{ $t('home.features_title') }}</h2>
      <div class="features-grid">
        <div class="feature-card">
          <span class="feature-icon">🥬</span>
          <h3>{{ $t('home.feature_fresh') }}</h3>
          <p>{{ $t('home.feature_fresh_desc') }}</p>
        </div>
        <div class="feature-card">
          <span class="feature-icon">⚡</span>
          <h3>{{ $t('home.feature_fast') }}</h3>
          <p>{{ $t('home.feature_fast_desc') }}</p>
        </div>
        <div class="feature-card">
          <span class="feature-icon">🎨</span>
          <h3>{{ $t('home.feature_custom') }}</h3>
          <p>{{ $t('home.feature_custom_desc') }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()

useHead({
  title: 'PizzaExpress — Fresh Pizza Delivered Fast',
})
</script>

<style scoped>
.hero {
  text-align: center;
  padding: 4rem 0;
}

.hero h1 {
  font-size: 3rem;
  color: var(--color-primary);
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--color-muted);
  max-width: 500px;
  margin: 0 auto 2rem;
}

.btn {
  display: inline-block;
  padding: 0.85rem 2rem;
  border-radius: var(--radius);
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: transform 0.2s, box-shadow 0.2s;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(230, 57, 70, 0.3);
}

.btn-primary {
  background: var(--color-primary);
  color: white;
}

.features {
  padding: 3rem 0;
}

.features h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: var(--radius);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  text-align: center;
}

.feature-icon {
  font-size: 2.5rem;
  display: block;
  margin-bottom: 1rem;
}

.feature-card h3 {
  margin-bottom: 0.5rem;
  color: var(--color-primary);
}

.feature-card p {
  color: var(--color-muted);
}
</style>
