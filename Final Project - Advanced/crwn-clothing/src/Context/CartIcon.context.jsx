import { createContext, useEffect, useReducer, useState } from "react"

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

const Reducer_Type_Action = {
  Set_Cart_Items:'Set_Cart_Items',
  Set_Cart_Icon:'Set_Cart_Icon'
}

const INITIAL_VALUES = {
  cartIconToggle: false,
  cartIconItems: [],
  cartTotal: 0,
  cartCount: 0,
}

const reducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case Reducer_Type_Action.Set_Cart_Items:
      return {
        ...state,
        ...payload,
      }

    case Reducer_Type_Action.Set_Cart_Icon:
      return {
        ...state,
        cartIconToggle:payload
      }
    default:
      throw new Error(`reducer does not contain ${type} action`)
  }
}

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
  const [{ cartIconItems, cartTotal, cartCount, cartIconToggle }, dispatch] =
    useReducer(reducer, INITIAL_VALUES)

  const updateCartItemsReducer = (newCartItems) => {
    const newCount = newCartItems.reduce((acc, item) => {
      return acc + item.quantity
    }, 0)

    const newCartTotal = newCartItems.reduce((acc, item) => {
      return acc + item.price * item.quantity
    }, 0)

    dispatch({
      type: Reducer_Type_Action.Set_Cart_Items,
      payload: {
        cartIconItems: newCartItems,
        cartTotal: newCartTotal,
        cartCount: newCount,
      },
    })
  }

  const setCartIconToggle = (bool) => {
    dispatch({type:Reducer_Type_Action.Set_Cart_Icon, payload:bool})
  }

  const addItemsToCart = (productToAdd) => {
    const newCartItems = checkAddedItemToCart(productToAdd, cartIconItems)
    updateCartItemsReducer(newCartItems)
  }

  const decrementItemFromCart = (cartItemToRemove) => {
    const newCartItems = checkDecrementedItemFromCart(
      cartItemToRemove,
      cartIconItems
    )
    updateCartItemsReducer(newCartItems)
  }

  const removeCartItem = (cartItemToRemove) => {
    const newCartItems = checkRemoveCartItem(cartItemToRemove, cartIconItems)
    updateCartItemsReducer(newCartItems)
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
