import { ShoppingCart, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="w-full px-4 py-3 border-b shadow-sm flex items-center justify-between">
      <div className="text-xl font-bold text-primary"><img className="w-32" src="/logo.png" /></div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" aria-label="Cart">
          <ShoppingCart className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" aria-label="Account">
          <User className="h-5 w-5" />
        </Button>
      </div>
    </header>
  )
}
