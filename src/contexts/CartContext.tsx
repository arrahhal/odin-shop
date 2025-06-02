import { useState, createContext, useContext } from "react";
import type { ReactNode } from "react";
import type { Product } from "@/types/product";
import type { CartItems, CartContextType } from "@/types/cart";

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartContextProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItems>([])

  const addToCart = (product: Product, quantity: number = 1) => {
    setCartItems((prev) => {
      const existing = prev[product.id]
      return {
        ...prev,
        [product.id]: {
          product,
          quantity: existing ? existing.quantity + quantity : quantity,
        },
      }
    })
  }

  const removeFromCart = (productId: number) => {
    setCartItems((prev) => {
      const { [productId]: _, ...rest } = prev
      return rest
    })
  }

  const clearCart = () => { setCartItems({}) };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }} >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined)
    if (!context) throw new Error("useCart must be used within a CartContextProvider")
  return context;
}
