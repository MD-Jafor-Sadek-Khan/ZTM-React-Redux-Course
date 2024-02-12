import { useContext } from "react"
import "./checkout-item.styles.scss"
import { CartIconContext } from "../../Context/CartIcon.context"

const CheckoutItem = ({ cartItem }) => {
  const { removeCartItem, addItemsToCart, decrementItemFromCart } = useContext(CartIconContext)
  const { name, price, quantity, imageUrl } = cartItem

  const handleRemoveCartItemClick = () => removeCartItem(cartItem)
  const handleAddToCart = ()=> addItemsToCart(cartItem)
  const handleRemoveFromCart = ()=> decrementItemFromCart(cartItem)

  return (
    <div className="checkout-item-container">
      <div className="image-container ">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={handleRemoveFromCart}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={handleAddToCart}>&#10095;</div>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={handleRemoveCartItemClick}>
        &#10005;
      </span>
    </div>
  )
}

export default CheckoutItem
