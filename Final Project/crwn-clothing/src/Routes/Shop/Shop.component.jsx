import { Fragment, useContext } from "react"
import ProductCard from "../../Components/Product-Card/ProductCard.component"
import "./shop.styles.scss"
import { CategoriesContext } from "../../Context/Categories.context"

const Shop = () => {
  const { categoryMap } = useContext(CategoriesContext)
  return (
    <Fragment>
      {Object.keys(categoryMap).map((category) => {
        return (
          <Fragment>
            <h2>{category}</h2>
            <div key={category} className="product-list-container">
              {categoryMap[category].map((product) => {
                return <ProductCard key={product.id} product={product} />
              })}
            </div>
          </Fragment>
        )
      })}
    </Fragment>
  )
}
// category pages
export default Shop
