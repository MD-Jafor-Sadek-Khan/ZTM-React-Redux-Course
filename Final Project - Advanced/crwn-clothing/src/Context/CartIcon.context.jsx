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

const CART_ACTION_TYPES = {
  Toggle_Cart_Icon: "Toggle_Cart_Icon",
  Add_Items_To_Cart: "Add_Items_To_Cart",
  Decrement_Item_From_Cart: "Decrement_Item_From_Cart",
  Remove_Cart_Item: "Remove_Cart_Item",
  Update_Cart_Count:'Update_Cart_Count',
  Update_Cart_Total:'Update_Cart_Total',
}

const userReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case CART_ACTION_TYPES.Toggle_Cart_Icon:
      return {
        ...state,
        cartIconToggle: !state.cartIconToggle,
      }

    case CART_ACTION_TYPES.Add_Items_To_Cart:
      const updatedProductListforADD = checkAddedItemToCart(
        payload,
        state.cartIconItems
      )
      return {
        ...state,
        cartIconItems: updatedProductListforADD,
      }

    case CART_ACTION_TYPES.Decrement_Item_From_Cart:
      const updatedProductListforDecrement = checkDecrementedItemFromCart(
        payload,
        state.cartIconItems
      )
      return {
        ...state,
        cartIconItems: updatedProductListforDecrement,
      }

    case CART_ACTION_TYPES.Remove_Cart_Item:
      const updatedProductListforRemove = checkRemoveCartItem(
        payload,
        state.cartIconItems
      )
      return {
        ...state,
        cartIconItems: updatedProductListforRemove,
      }


    case CART_ACTION_TYPES.Update_Cart_Count:
      return{
        ...state,
        cartCount:payload
      }

    case CART_ACTION_TYPES.Update_Cart_Total:
      return{
        ...state,
        cartTotal:payload
      }
    default:
      throw new Error(`No Such Action Called "${type}" Found On userReducer`)
  }
}

const INITIAL_VALUE = {
  cartIconToggle: false,
  cartIconItems: [],
  cartCount:0,
  cartTotal:0,
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
  const [{ cartIconToggle, cartIconItems, cartCount, cartTotal }, dispatcher] = useReducer(
    userReducer,
    INITIAL_VALUE
  )
  const setCartIconToggle = () => {
    dispatcher({ type: CART_ACTION_TYPES.Toggle_Cart_Icon, payload: null })
  }

  const setCartCount = (updatedCount)=>{
    dispatcher({type:CART_ACTION_TYPES.Update_Cart_Count, payload:updatedCount})
  }


  const setCartTotal = (updatedValue)=>{
    dispatcher({type:CART_ACTION_TYPES.Update_Cart_Total, payload:updatedValue})
  }

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
    dispatcher({
      type: CART_ACTION_TYPES.Add_Items_To_Cart,
      payload: productToAdd,
    })
  }

  const decrementItemFromCart = (cartItemToRemove) => {
    dispatcher({
      type: CART_ACTION_TYPES.Decrement_Item_From_Cart,
      payload: cartItemToRemove,
    })
  }

  const removeCartItem = (cartItemToRemove) => {
    dispatcher({
      type: CART_ACTION_TYPES.Remove_Cart_Item,
      payload: cartItemToRemove,
    })
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
