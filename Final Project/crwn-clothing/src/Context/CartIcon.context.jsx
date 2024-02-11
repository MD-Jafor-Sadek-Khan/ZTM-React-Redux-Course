import { createContext, useState } from "react"

export const CartIconContext = createContext({
  cartIconToggle: true,
  setCartIconToggle: () => null,
  cartIconItems: [],
  setCartIconItems: () => null,
})

export const CartIconContextProvider = ({ children }) => {
  const [cartIconToggle, setCartIconToggle] = useState(true)
  const [cartIconItems, setCartIconItems] = useState([])

  const value = {
    cartIconToggle,
    setCartIconToggle,
    cartIconItems,
    setCartIconItems,
  }
  return (
    <CartIconContext.Provider value={value}>
      {children}
    </CartIconContext.Provider>
  )
}
