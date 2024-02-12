import { useContext } from "react"
import "./cart.styles.scss"
import { CartIconContext } from "../../Context/CartIcon.context"

const Cart = () => {
  const { removeFromCart,cartTotal, cartIconItems, addItemsToCart, removeItemsFromCart } =
    useContext(CartIconContext)

  const cartItemsList = cartIconItems.map((item) => {
    const { name, quantity, price, imageUrl, id } = item

    return (
      <div
        key={id}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div>
          <img src={imageUrl} alt={name} />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h2>{name}</h2>
            <p>{price}</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <button
              onClick={() => {
                removeItemsFromCart(item)
              }}
            >
              -
            </button>
            <h2>
              &nbsp;&nbsp;&nbsp;&nbsp;{`${quantity}`}&nbsp;&nbsp;&nbsp;&nbsp;
            </h2>
            <button
              onClick={() => {
                addItemsToCart(item)
              }}
            >
              +
            </button>
          </div>
          <button onClick={() => removeFromCart(item)}>X</button>
        </div>
      </div>
    )
  })

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "30px",
        }}
      >
        {cartItemsList}
      </div>
      <div>
        <h1>Cart Total = {cartTotal}</h1>
      </div>
    </div>
  )
}

export default Cart
