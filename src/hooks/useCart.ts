export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined)
    if (!context) throw new Error("useCart must be used within a CartContextProvider")
  return context;
}
