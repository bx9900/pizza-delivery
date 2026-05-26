<template>
  <div class="order-page">
    <h1>{{ $t('order.title') }}</h1>

    <!-- Success state -->
    <div v-if="orderPlaced" class="success-card">
      <span class="success-icon">✅</span>
      <h2>{{ $t('order.success_title') }}</h2>
      <p>{{ $t('order.success_message') }}</p>
    </div>

    <!-- Order form -->
    <div v-else class="order-layout">
      <div class="order-form">
        <div class="form-group">
          <label for="name">{{ $t('order.name') }}</label>
          <input id="name" v-model="form.name" type="text" required />
        </div>
        <div class="form-group">
          <label for="address">{{ $t('order.address') }}</label>
          <input id="address" v-model="form.address" type="text" required />
        </div>
        <div class="form-group">
          <label for="phone">{{ $t('order.phone') }}</label>
          <input id="phone" v-model="form.phone" type="tel" required />
        </div>
        <div class="form-group">
          <label for="notes">{{ $t('order.notes') }}</label>
          <textarea
            id="notes"
            v-model="form.notes"
            :placeholder="$t('order.notes_placeholder')"
            rows="3"
          />
        </div>
      </div>

      <aside class="order-summary">
        <h2>{{ $t('order.your_order') }}</h2>

        <div v-if="cart.length === 0" class="empty-cart">
          <p>{{ $t('order.empty_cart') }}</p>
        </div>

        <ul v-else class="cart-items">
          <li v-for="(item, index) in cart" :key="index" class="cart-item">
            <span>{{ item.name }}</span>
            <span class="item-price">${{ item.price.toFixed(2) }}</span>
            <button class="btn-remove" @click="removeItem(index)">
              {{ $t('order.remove') }}
            </button>
          </li>
        </ul>

        <div v-if="cart.length > 0" class="cart-total">
          <strong>{{ $t('order.total') }}:</strong>
          <strong>${{ total.toFixed(2) }}</strong>
        </div>

        <button
          class="btn-order"
          :disabled="cart.length === 0 || !isFormValid"
          @click="placeOrder"
        >
          {{ $t('order.place_order') }}
        </button>
      </aside>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: () => `${t('order.title')} — PizzaExpress`,
})

const cart = useCart()
const orderPlaced = ref(false)

const form = reactive({
  name: '',
  address: '',
  phone: '',
  notes: '',
})

const total = computed(() => cart.value.reduce((sum, item) => sum + item.price, 0))

const isFormValid = computed(() => form.name && form.address && form.phone)

function removeItem(index: number) {
  cart.value.splice(index, 1)
}

function placeOrder() {
  orderPlaced.value = true
  cart.value = []
}
</script>

<style scoped>
.order-page h1 {
  font-size: 2.5rem;
  color: var(--color-primary);
  margin-bottom: 2rem;
}

.order-layout {
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 2rem;
  align-items: start;
}

@media (max-width: 768px) {
  .order-layout {
    grid-template-columns: 1fr;
  }
}

.order-form {
  background: white;
  padding: 2rem;
  border-radius: var(--radius);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.form-group {
  margin-bottom: 1.25rem;
}

.form-group label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.4rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.2s;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-primary);
}

.order-summary {
  background: white;
  padding: 1.5rem;
  border-radius: var(--radius);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 100px;
}

.order-summary h2 {
  margin-bottom: 1rem;
  color: var(--color-primary);
}

.empty-cart {
  color: var(--color-muted);
  text-align: center;
  padding: 1rem 0;
}

.cart-items {
  list-style: none;
}

.cart-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f0f0f0;
}

.item-price {
  margin-left: auto;
  font-weight: 600;
}

.btn-remove {
  background: none;
  border: none;
  color: var(--color-primary);
  cursor: pointer;
  font-size: 0.8rem;
  text-decoration: underline;
}

.cart-total {
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  font-size: 1.2rem;
  border-top: 2px solid var(--color-primary);
  margin-top: 0.5rem;
}

.btn-order {
  width: 100%;
  padding: 0.85rem;
  background: var(--color-primary);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 1rem;
  transition: background 0.2s;
}

.btn-order:hover:not(:disabled) {
  background: #c1121f;
}

.btn-order:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.success-card {
  text-align: center;
  background: white;
  padding: 3rem;
  border-radius: var(--radius);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  max-width: 500px;
  margin: 2rem auto;
}

.success-icon {
  font-size: 3rem;
  display: block;
  margin-bottom: 1rem;
}

.success-card h2 {
  color: var(--color-primary);
  margin-bottom: 0.5rem;
}
</style>
