import { useEffect, useState } from "react"
import type { Product } from "@/types/product"

export function useFakeStore() {
  const [items, setItems] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(setItems)
      .catch((err) => console.error(err))
      .finally(() => setLoading(false))
  }, [])

  return { items, loading }
}
