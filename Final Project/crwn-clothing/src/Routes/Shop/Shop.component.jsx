import { Fragment, useContext } from "react"
import ProductCard from "../../Components/Product-Card/ProductCard.component"
import { CategoryStateContext } from "../../Context/CategoryState.context"
import "./shop.styles.scss"
import { CategoriesContext } from "../../Context/Categories.context"
import { useNavigate } from "react-router-dom"

const Shop = () => {
  const { categoryMap } = useContext(CategoriesContext)
  const { setCurrentCategory } = useContext(CategoryStateContext)

  const navigate = useNavigate()

  const handleNavigation = (category) => {
    setCurrentCategory(category)
    navigate(`/shop/${category}`)
  }

  return (
    <Fragment>
      {Object.keys(categoryMap).map((category) => {
        return (
          <Fragment key={category}>
            <h2>
              <span
                style={{ cursor: "pointer" }}
                onClick={() => handleNavigation(category)}
              >
                {category.toUpperCase()}
              </span>
            </h2>
            <div className="product-list-container">
              {categoryMap[category].map((product, index) => {
                if (index > 3) return null
                return <ProductCard key={product.id} product={product} />
              })}
            </div>
          </Fragment>
        )
      })}
    </Fragment>
  )
}
export default Shop
