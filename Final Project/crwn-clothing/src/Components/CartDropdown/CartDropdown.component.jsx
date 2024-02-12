import "./cart-dropdown.styles.scss"
import Button from '../Button/Buttom.component'
import { useContext } from "react"
import { CartIconContext } from "../../Context/CartIcon.context"
import CartItem from "../Cart-Item/CartItem.component"



export const CartDropdown = () => {

const {cartIconItems} = useContext(CartIconContext)


  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
      {cartIconItems.map(item =>{
        return <CartItem  cartItem={item}/>
      })}
      </div>
      <Button>Go to Checkout</Button>
    </div>
  )
}
