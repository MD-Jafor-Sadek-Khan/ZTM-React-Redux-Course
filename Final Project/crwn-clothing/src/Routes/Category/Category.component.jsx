import { Fragment, useContext } from "react"
import { CategoriesContext } from "../../Context/Categories.context"
import ProductCard from "../../Components/Product-Card/ProductCard.component"
import { CategoryStateContext } from "../../Context/CategoryState.context"

const Category = () => {
  const { categoryMap } = useContext(CategoriesContext)
  const { currentCategory } = useContext(CategoryStateContext)
  return (
    <Fragment>
      <h2>{currentCategory}</h2>
      <div className="product-list-container">
        {categoryMap[currentCategory].map((product) => {
          return <ProductCard key={product.id} product={product} />
        })}
      </div>
    </Fragment>
  )
}

export default Category
