import { useContext } from "react"
import "./checkout.styles.scss"
import { CartIconContext } from "../../Context/CartIcon.context"
import './checkout.styles.scss'
import CheckoutItem from "../Checkout-Item/CheckoutItem.component"

const Checkout = () => {
  const { cartIconItems, cartTotal } =
    useContext(CartIconContext)
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
            <span>Product</span>
        </div>
        <div className="header-block">
            <span>Description</span>
        </div>
        <div className="header-block">
            <span>Quantity</span>
        </div>
        <div className="header-block">
            <span>Price</span>
        </div>
        <div className="header-block">
            <span>Remove</span>
        </div>
      </div>

      {cartIconItems.map((item) => {
        return (
          <CheckoutItem key={item.id} cartItem={item}/>
        )
      })}
      <span className="total">Total: ${cartTotal}</span>
    </div>
  )
}

export default Checkout
