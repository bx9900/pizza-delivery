<template>
  <div class="about-page">
    <h1>{{ $t('about.title') }}</h1>

    <section class="story">
      <h2>{{ $t('about.story_title') }}</h2>
      <p>{{ $t('about.story_text') }}</p>
    </section>

    <section class="values">
      <h2>{{ $t('about.values_title') }}</h2>
      <div class="values-grid">
        <div class="value-card">
          <span class="value-icon">⭐</span>
          <h3>{{ $t('about.value_quality') }}</h3>
          <p>{{ $t('about.value_quality_desc') }}</p>
        </div>
        <div class="value-card">
          <span class="value-icon">🤝</span>
          <h3>{{ $t('about.value_community') }}</h3>
          <p>{{ $t('about.value_community_desc') }}</p>
        </div>
        <div class="value-card">
          <span class="value-icon">🌱</span>
          <h3>{{ $t('about.value_sustainability') }}</h3>
          <p>{{ $t('about.value_sustainability_desc') }}</p>
        </div>
      </div>
    </section>

    <section class="stats">
      <h2>{{ $t('about.stats_title') }}</h2>
      <div class="stats-grid">
        <div class="stat-card">
          <span class="stat-number">50,000+</span>
          <span class="stat-label">{{ $t('about.stat_pizzas') }}</span>
        </div>
        <div class="stat-card">
          <span class="stat-number">12,000+</span>
          <span class="stat-label">{{ $t('about.stat_customers') }}</span>
        </div>
        <div class="stat-card">
          <span class="stat-number">4.9/5</span>
          <span class="stat-label">{{ $t('about.stat_rating') }}</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: () => `${t('about.title')} — PizzaExpress`,
})
</script>

<style scoped>
.about-page h1 {
  font-size: 2.5rem;
  color: var(--color-primary);
  margin-bottom: 2rem;
}

.story {
  background: white;
  padding: 2rem;
  border-radius: var(--radius);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
}

.story h2 {
  color: var(--color-primary);
  margin-bottom: 1rem;
}

.story p {
  color: var(--color-muted);
  font-size: 1.1rem;
  line-height: 1.8;
}

.values {
  margin-bottom: 2rem;
}

.values h2 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.value-card {
  background: white;
  padding: 2rem;
  border-radius: var(--radius);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  text-align: center;
}

.value-icon {
  font-size: 2rem;
  display: block;
  margin-bottom: 0.75rem;
}

.value-card h3 {
  color: var(--color-primary);
  margin-bottom: 0.5rem;
}

.value-card p {
  color: var(--color-muted);
}

.stats h2 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

@media (max-width: 600px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
}

.stat-card {
  background: var(--color-primary);
  color: white;
  padding: 2rem;
  border-radius: var(--radius);
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 1rem;
  opacity: 0.9;
}
</style>
