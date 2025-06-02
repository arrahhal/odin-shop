import Header from "./components/Header"
import ItemGrid from "./components/ItemGrid"
import { CartContextProvider } from "./contexts/CartContext"

function App() {
  return (
    <div className="flex flex-col gap-2">
      <CartContextProvider>
        <Header></Header>
        <ItemGrid></ItemGrid>
      </CartContextProvider>
    </div>
  )
}

export default App
