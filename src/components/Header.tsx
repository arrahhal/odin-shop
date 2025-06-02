import { ShoppingCart, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/contexts/CartContext";

export default function Header() {
  const { cartItems } = useCart();

  const getTotalQuantity = () => {
    return Object.values(cartItems).reduce(
      (total, item) => total + item.quantity,
      0
    )
  }

  const totalQuantity = getTotalQuantity();


  return (
    <header className="sticky top-0 z-50 bg-background w-full px-4 py-3 border-b shadow-sm flex items-center justify-between">
      <div className="text-xl font-bold text-primary"><img className="w-32" src="/logo.png" /></div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <Button variant="ghost" size="icon" aria-label="Cart">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          {totalQuantity > 0 && (
            <Badge className="absolute -top-1 -right-1 rounded-full px-1 text-xs">
              {totalQuantity}
            </Badge>
          )}
        </div>
        <Button variant="ghost" size="icon" aria-label="Account">
          <User className="h-5 w-5" />
        </Button>
      </div>
    </header>
  )
}
