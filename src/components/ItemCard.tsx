import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"

type ItemCardProps = {
  title: string
  desc: string
  price: number
  image?: string
  loading: boolean
}

export function ItemCard({ title, desc, price, image, loading = false }: ItemCardProps) {
  const [quantity, setQuantity] = useState(1)

  const handleIncrease = () => setQuantity(q => q + 1)
  const handleDecrease = () => setQuantity(q => (q > 1 ? q - 1 : 1))

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        {loading ? (
          <Skeleton className="w-full h-48 rounded-md" />
        ) : (
          <img
            src={image || "https://via.placeholder.com/300x200"}
            alt={title}
            className="w-full h-48 object-cover rounded-md"
          />
        )}

        {loading ? (
          <>
            <Skeleton className="h-5 w-3/4 mt-4" />
            <Skeleton className="h-4 w-full mt-2" />
          </>
        ) : (
          <>
            <CardTitle className="text-lg mt-2">{title}</CardTitle>
            <CardDescription className="line-clamp-2">{desc}</CardDescription>
          </>
        )}
      </CardHeader>

      <CardContent className="flex items-center justify-between">
        {loading ? (
          <>
            <Skeleton className="h-6 w-16" />
            <div className="flex gap-2">
              <Skeleton className="h-8 w-8" />
              <Skeleton className="h-8 w-12" />
              <Skeleton className="h-8 w-8" />
            </div>
          </>
        ) : (
          <>
            <span className="text-xl font-semibold">${(price * quantity).toFixed(2)}</span>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={handleDecrease}>-</Button>
              <Input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                className="w-12 text-center p-1 h-8 
                  [&::-webkit-outer-spin-button]:appearance-none 
                  [&::-webkit-inner-spin-button]:appearance-none 
                  appearance-none 
                  [&::-moz-appearance]:textfield"
                min={1}
              />
              <Button variant="outline" size="sm" onClick={handleIncrease}>+</Button>
            </div>
          </>
        )}
      </CardContent>

      <CardFooter>
        {loading ? (
          <Skeleton className="h-10 w-full" />
        ) : (
          <Button className="w-full">Add {quantity} to Cart</Button>
        )}
      </CardFooter>
    </Card>
  )
}

export default ItemCard
