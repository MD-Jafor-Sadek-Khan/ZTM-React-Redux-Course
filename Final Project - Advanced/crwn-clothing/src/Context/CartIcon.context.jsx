import { createContext, useEffect, useState } from "react"

export const CartIconContext = createContext({
  cartIconToggle: false,
  setCartIconToggle: () => {},
  cartIconItems: [],
  addItemsToCart: () => {},
  cartCount: 0,
  decrementItemFromCart: () => {},
  removeCartItem: () => {},
  cartTotal: 0,
})

const checkAddedItemToCart = (productToAdd, cartIconItems) => {
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

const checkDecrementedItemFromCart = (cartItemToRemove, cartIconItems) => {
  const foundItemsOnCart = cartIconItems.find((item) => {
    return item.id === cartItemToRemove.id
  })

  if (foundItemsOnCart.quantity === 1) {
    return cartIconItems.filter((item) => {
      return item.id !== cartItemToRemove.id
    })
  }

  return cartIconItems.map((item) => {
    return item.id === cartItemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  })
}

const checkRemoveCartItem = (cartItemToRemove, cartIconItems) => {
  return cartIconItems.filter((item) => item.id !== cartItemToRemove.id)
}

export const CartIconContextProvider = ({ children }) => {
  const [cartIconToggle, setCartIconToggle] = useState(false)
  const [cartIconItems, setCartIconItems] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)

  useEffect(() => {
    const newCount = cartIconItems.reduce((acc, item) => {
      return acc + item.quantity
    }, 0)
    setCartCount(newCount)
  }, [cartIconItems])

  useEffect(() => {
    const newCartTotal = cartIconItems.reduce((acc, item) => {
      return acc + item.price * item.quantity
    }, 0)
    setCartTotal(newCartTotal)
  }, [cartIconItems])

  const addItemsToCart = (productToAdd) => {
    setCartIconItems(checkAddedItemToCart(productToAdd, cartIconItems))
  }

  const decrementItemFromCart = (cartItemToRemove) => {
    setCartIconItems(
      checkDecrementedItemFromCart(cartItemToRemove, cartIconItems)
    )
  }

  const removeCartItem = (cartItemToRemove) => {
    setCartIconItems(checkRemoveCartItem(cartItemToRemove, cartIconItems))
  }

  const value = {
    cartIconToggle,
    setCartIconToggle,
    cartIconItems,
    addItemsToCart,
    cartCount,
    decrementItemFromCart,
    removeCartItem,
    cartTotal,
  }
  return (
    <CartIconContext.Provider value={value}>
      {children}
    </CartIconContext.Provider>
  )
}
