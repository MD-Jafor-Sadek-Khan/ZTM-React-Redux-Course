import "./cart-dropdown.styles.jsx"
import { Button_Type_ClassName } from "../Button/Buttom.component"
import { useContext } from "react"
import { CartIconContext } from "../../Context/CartIcon.context"
import CartItem from "../Cart-Item/CartItem.component"
import { useNavigate } from "react-router-dom"
import {
  ButtonStyled,
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles.jsx"

export const CartDropdown = () => {
  const { cartIconItems } = useContext(CartIconContext)
  const navigate = useNavigate()

  const handleCheckoutNavigation = () => {
    navigate("/checkout")
  }

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartIconItems.length > 0 ? (
          cartIconItems.map((item) => {
            return <CartItem key={item.id} cartItem={item} />
          })
        ) : (
          <EmptyMessage>Your Cart Is Empty</EmptyMessage>
        )}
      </CartItems>
      <ButtonStyled
        buttonType={Button_Type_ClassName.base}
        onClick={handleCheckoutNavigation}
      >
        Go to Checkout
      </ButtonStyled>
    </CartDropdownContainer>
  )
}
