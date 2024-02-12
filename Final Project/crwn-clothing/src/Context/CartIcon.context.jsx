import { createContext, useEffect, useState } from "react"

export const CartIconContext = createContext({
  cartIconToggle: true,
  setCartIconToggle: () => {},
  cartIconItems: [],
  addItemsToCart: () => {},
  cartCount: 0,
})

const checkCartItem = (productToAdd, cartIconItems) => {
  const foundItemsOnCart = cartIconItems.find((item) => {
    return item.id === productToAdd.id
  })

  if (foundItemsOnCart) {
    return cartIconItems.map((item) => {
      return item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    })
  } else {
    return [...cartIconItems, { ...productToAdd, quantity: 1 }]
  }
}

export const CartIconContextProvider = ({ children }) => {
  const [cartIconToggle, setCartIconToggle] = useState(true)
  const [cartIconItems, setCartIconItems] = useState([])
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const newCount = cartIconItems.reduce((acc, item) => {
      return acc + item.quantity
    }, 0)
    setCartCount(newCount)
  }, [cartIconItems])

  const addItemsToCart = (productToAdd) => {
    setCartIconItems(checkCartItem(productToAdd, cartIconItems))
  }

  const value = {
    cartIconToggle,
    setCartIconToggle,
    cartIconItems,
    addItemsToCart,
    cartCount,
  }
  return (
    <CartIconContext.Provider value={value}>
      {children}
    </CartIconContext.Provider>
  )
}
// 