import "./cart-icon.styles.jsx"
import CART_ICON from "../../assets/shopping-bag.svg"
import { useContext } from "react"
import { CartIconContext } from "../../Context/CartIcon.context"
import {
  CartIconContainer,
  ItemCount,
  ShoppingIcon,
} from "./cart-icon.styles.jsx"

const CartIcon = () => {
  const { cartIconToggle, setCartIconToggle, cartCount } =
    useContext(CartIconContext)
  const handleCartIconToggle = () => {
    setCartIconToggle(!cartIconToggle)
  }

  return (
    <CartIconContainer onClick={handleCartIconToggle}>
      <ShoppingIcon src={CART_ICON} alt="cart-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon
