import { useContext } from "react"
import { CartIconContext } from "../../Context/CartIcon.context"
import { Arrow, CheckoutItemContainer, ImageContainer, Name, Price, Quantity, RemoveButton, Value } from "./checkout-item.styles.jsx"

const CheckoutItem = ({ cartItem }) => {
  const { removeCartItem, addItemsToCart, decrementItemFromCart } = useContext(CartIconContext)
  const { name, price, quantity, imageUrl } = cartItem

  const handleRemoveCartItemClick = () => removeCartItem(cartItem)
  const handleAddToCart = ()=> addItemsToCart(cartItem)
  const handleRemoveFromCart = ()=> decrementItemFromCart(cartItem)

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={handleRemoveFromCart}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={handleAddToCart}>&#10095;</Arrow>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButton onClick={handleRemoveCartItemClick}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem
