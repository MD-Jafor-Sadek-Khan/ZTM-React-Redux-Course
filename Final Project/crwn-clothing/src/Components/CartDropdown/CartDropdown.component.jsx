import "./cart-dropdown.styles.scss"
import Button from "../Button/Buttom.component"
import { useContext } from "react"
import { CartIconContext } from "../../Context/CartIcon.context"
import CartItem from "../Cart-Item/CartItem.component"
import { Link } from "react-router-dom"

export const CartDropdown = () => {
  const { cartIconItems } = useContext(CartIconContext)

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartIconItems.map((item) => {
          return <CartItem key={item.id} cartItem={item} />
        })}
      </div>
      <Link to={'/cart'}>
        <Button>Go to Checkout</Button>
      </Link>
    </div>
  )
}
