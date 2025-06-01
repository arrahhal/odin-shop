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

export function ItemCard() {
  const [quantity, setQuantity] = useState(1)

  const handleIncrease = () => setQuantity(q => q + 1)
  const handleDecrease = () => setQuantity(q => (q > 1 ? q - 1 : 1))

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <img
          src="https://via.placeholder.com/300x200"
          alt="Product"
          className="w-full h-48 object-cover rounded-md"
        />
        <CardTitle className="text-lg mt-2">Cool Sneakers</CardTitle>
        <CardDescription className="line-clamp-2">
          High-quality sneakers that keep your feet comfy all day. Limited stock available.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <span className="text-xl font-semibold">$89.99</span>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={handleDecrease}>
            -
          </Button>
          <Input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-12 text-center p-1 h-8 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-moz-appearance]:textfield appearance-none"
            min={1}
          />
          <Button variant="outline" size="sm" onClick={handleIncrease}>
            +
          </Button>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Add {quantity} to Cart</Button>
      </CardFooter>
    </Card>
  )
}

export default ItemCard
