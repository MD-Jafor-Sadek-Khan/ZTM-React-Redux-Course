import { createContext, useEffect, useState } from "react"

export const CartIconContext = createContext({
  cartIconToggle: true,
  setCartIconToggle: () => {},
  cartIconItems: [],
  addItemsToCart: () => {},
  cartCount: 0,
  removeItemsFromCart: () => {},
  cartTotal: 0,
  removeFromCart: ()=>{},
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

const reduceCartItem = (productToRemove, cartIconItems) => {
  return cartIconItems.map((item) => {
    return productToRemove.id === item.id
      ? { ...item, quantity: item.quantity === 0 ? 0 : item.quantity - 1 }
      : item
  })
}

export const CartIconContextProvider = ({ children }) => {
  const [cartIconToggle, setCartIconToggle] = useState(true)
  const [cartIconItems, setCartIconItems] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)

  useEffect(() => {
    const newCount = cartIconItems.reduce((acc, item) => {
      return acc + item.quantity
    }, 0)
    setCartCount(newCount)

    const newCartTotal = cartIconItems.reduce((acc, item) => {
      return acc + item.price * item.quantity
    }, 0)
    setCartTotal(newCartTotal)
  }, [cartIconItems])

  const addItemsToCart = (productToAdd) => {
    setCartIconItems(checkCartItem(productToAdd, cartIconItems))
  }

  const removeItemsFromCart = (productToRemove) => {
    setCartIconItems(reduceCartItem(productToRemove, cartIconItems))
  }

  const removeFromCart = (product) =>{
    const newCartIconItems = cartIconItems.filter((item)=>{
      return !(product.id === item.id)
    })

    setCartIconItems(newCartIconItems)
  }



  const value = {
    cartIconToggle,
    setCartIconToggle,
    cartIconItems,
    addItemsToCart,
    cartCount,
    removeItemsFromCart,
    cartTotal,
    removeFromCart,
  }
  return (
    <CartIconContext.Provider value={value}>
      {children}
    </CartIconContext.Provider>
  )
}
