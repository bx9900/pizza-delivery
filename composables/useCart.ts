interface CartItem {
  id: string
  name: string
  price: number
}

export const useCart = () => {
  return useState<CartItem[]>('cart', () => [])
}
