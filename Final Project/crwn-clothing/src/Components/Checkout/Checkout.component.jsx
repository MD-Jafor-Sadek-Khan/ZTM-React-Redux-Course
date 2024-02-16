import { useContext } from "react"
import "./checkout.styles.jsx"
import { CartIconContext } from "../../Context/CartIcon.context"
import "./checkout.styles.jsx"
import CheckoutItem from "../Checkout-Item/CheckoutItem.component"
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles.jsx"

const Checkout = () => {
  const { cartIconItems, cartTotal } = useContext(CartIconContext)
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>

      {cartIconItems.map((item) => {
        return <CheckoutItem key={item.id} cartItem={item} />
      })}
      <Total>Total: ${cartTotal}</Total>
    </CheckoutContainer>
  )
}

export default Checkout
