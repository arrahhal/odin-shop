import ItemCard from "./ItemCard"
import { useFakeStore } from "@/hooks/useFakeStore"
import type { Product } from "@/types/product"

type Props = {
  items: Product[]
  loading?: boolean
}

export default function ItemGrid() {
  const { items, loading }: Props = useFakeStore();

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
      {loading
        ? Array.from({ length: 6 }).map((_, i) => <ItemCard id={i} key={i} loading title="" description="" price={0} />)
        : items.map((item) => (
          <ItemCard
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            image={item.image}
            loading={false}
          />
        ))}
    </div>
  )
}
