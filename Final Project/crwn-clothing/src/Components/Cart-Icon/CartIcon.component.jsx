import "./cart-icon.styles.scss"
import CART_ICON from "../../assets/shopping-bag.svg"
import { useContext } from "react"
import { CartIconContext } from "../../Context/CartIcon.context"

const CartIcon = () => {

  const {cartIconToggle,setCartIconToggle} = useContext(CartIconContext)
  const handleCartIconToggle = ()=>{
    setCartIconToggle(!cartIconToggle)
  }

  return (
    <div className="cart-icon-container" onClick={handleCartIconToggle}>
      <img className="shopping-icon" src={CART_ICON} alt="cart-icon" />
      <span className="item-count">0</span>
    </div>
  )
}

export default CartIcon
