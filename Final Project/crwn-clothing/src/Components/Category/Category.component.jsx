import { useParams } from "react-router-dom"
import "./category.styles.scss"
import { Fragment, useContext, useEffect, useState } from "react"
import { CategoriesContext } from "../../Context/Categories.context"
import ProductCard from "../Product-Card/ProductCard.component"
const Category = () => {
  const { category } = useParams()
  const { categoryMap } = useContext(CategoriesContext)
  const [products, setProducts] = useState(categoryMap[category])
  useEffect(() => {
    setProducts(categoryMap[category])
  }, [category, categoryMap])
  return (
    <Fragment>
      <h1 className="category-title">{category.toUpperCase()}</h1>
      <div className="category-product-list-container">
        {products &&
          products.map((product) => {
            return <ProductCard key={product.id} product={product} />
          })}
      </div>
    </Fragment>
  )
}

export default Category
