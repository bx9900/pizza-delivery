<template>
  <div class="menu-page">
    <h1>{{ $t('menu.title') }}</h1>
    <p class="subtitle">{{ $t('menu.subtitle') }}</p>

    <div class="pizza-grid">
      <div v-for="pizza in pizzas" :key="pizza.id" class="pizza-card">
        <div class="pizza-emoji">{{ pizza.emoji }}</div>
        <div class="pizza-info">
          <h3>{{ $t(`menu.pizzas.${pizza.id}.name`) }}</h3>
          <p>{{ $t(`menu.pizzas.${pizza.id}.description`) }}</p>
          <div class="pizza-footer">
            <span class="price">{{ $t('menu.currency') }}{{ pizza.price.toFixed(2) }}</span>
            <button class="btn-add" @click="addToCart(pizza)">
              {{ $t('menu.add_to_order') }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: () => `${t('menu.title')} — PizzaExpress`,
})

const pizzas = [
  { id: 'margherita', price: 12.99, emoji: '🧀' },
  { id: 'pepperoni', price: 14.99, emoji: '🍕' },
  { id: 'hawaiian', price: 14.99, emoji: '🍍' },
  { id: 'veggie', price: 13.99, emoji: '🥦' },
  { id: 'bbq_chicken', price: 15.99, emoji: '🍗' },
  { id: 'four_cheese', price: 15.99, emoji: '🧈' },
]

const cart = useCart()

function addToCart(pizza: { id: string; price: number }) {
  cart.value.push({
    id: pizza.id,
    name: t(`menu.pizzas.${pizza.id}.name`),
    price: pizza.price,
  })
}
</script>

<style scoped>
.menu-page h1 {
  font-size: 2.5rem;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
}

.subtitle {
  color: var(--color-muted);
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.pizza-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}

.pizza-card {
  background: white;
  border-radius: var(--radius);
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  transition: transform 0.2s;
}

.pizza-card:hover {
  transform: translateY(-2px);
}

.pizza-emoji {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.pizza-info {
  flex: 1;
}

.pizza-info h3 {
  margin-bottom: 0.25rem;
}

.pizza-info p {
  color: var(--color-muted);
  font-size: 0.9rem;
  margin-bottom: 0.75rem;
}

.pizza-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.price {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-primary);
}

.btn-add {
  background: var(--color-primary);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.85rem;
  transition: background 0.2s;
}

.btn-add:hover {
  background: #c1121f;
}
</style>
