import type { Product } from "./product"

export type CartItem = {
  product: Product
  quantity: number
}

export type CartItems = {
  [productId: number]: CartItem
}

export type CartContextType = {
  cartItems: CartItems
  addToCart: (product: Product, quantity?: number) => void
  removeFromCart: (productId: number) => void
  clearCart: () => void
}
