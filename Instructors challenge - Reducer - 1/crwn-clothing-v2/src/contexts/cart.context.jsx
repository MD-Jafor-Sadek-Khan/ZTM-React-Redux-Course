import { createContext, useState, useEffect, useReducer } from "react"

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  )

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  )

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id)
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  )
}

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id)

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
})

const INITIAL_VALUES = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
}

const cartReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case "Set_New_Cart_Items":
      return {
        ...state,
        ...payload,
      }
    default:
      throw new Error(`no such type "${type}" found in cartReducer`)
  }
}

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)


  const [state, dispatcher] = useReducer(cartReducer, INITIAL_VALUES)

  const { cartCount, cartItems, cartTotal } = state


  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    )
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    )

    updateCartItemsReducer({ newCartTotal, newCartCount })
  }, [cartItems, ])




  const updateCartItemsReducer = ({
    newCartItems = cartItems,
    newCartCount = cartCount,
    newCartTotal = cartTotal,
  }) => {
    console.log("newCartCount", newCartCount)
    console.log("newCartItems", newCartItems)
    console.log("newCartTotal", newCartTotal)

    dispatcher({
      type: "Set_New_Cart_Items",
      payload: {
        cartItems: newCartItems,
        cartCount: newCartCount,
        cartTotal: newCartTotal,
      },
    })
  }

  const addItemToCart = (productToAdd) => {
    updateCartItemsReducer({
      newCartItems: addCartItem(cartItems, productToAdd),
    })
  }

  const removeItemToCart = (cartItemToRemove) => {
    updateCartItemsReducer({
      newCartItems: removeCartItem(cartItems, cartItemToRemove),
    })
  }

  const clearItemFromCart = (cartItemToClear) => {
    updateCartItemsReducer({
      newCartItems: clearCartItem(cartItems, cartItemToClear),
    })
  }

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemToCart,
    clearItemFromCart,
    cartItems,
    cartCount,
    cartTotal,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
