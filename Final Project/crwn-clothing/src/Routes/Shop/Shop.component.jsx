import { useContext } from "react"
import { ProductListContext } from "../../Context/ProductList.context"
import ProductCard from "../../Components/Product-Card/ProductCard.component"
import "./shop.styles.scss"

const Shop = () => {
  const { productList } = useContext(ProductListContext)
  return (
    <div className="product-list-container">
      {productList.map((product) => {
        return <ProductCard key={product.id} product={product} />
      })}
    </div>
  )
}

export default Shop
