export default defineEventHandler(() => {
  // Simulates a server-side data fetch (demonstrates SSR)
  const specials = [
    { id: 'deal1', name: 'Family Combo', description: '2 large pizzas + garlic bread', price: 29.99 },
    { id: 'deal2', name: 'Lunch Special', description: 'Any medium pizza + drink', price: 11.99 },
    { id: 'deal3', name: 'Party Pack', description: '4 large pizzas + 2 sides', price: 54.99 },
  ]

  return specials
})
