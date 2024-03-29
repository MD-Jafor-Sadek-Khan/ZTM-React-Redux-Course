import { useParams } from "react-router-dom"
import "./category.styles.jsx"
import { Fragment, useContext, useEffect, useState } from "react"
import { CategoriesContext } from "../../Context/Categories.context"
import ProductCard from "../Product-Card/ProductCard.component"
import {
  CategoryProductListContainer,
  CategoryTitle,
} from "./category.styles.jsx"
const Category = () => {
  const { category } = useParams()
  const { categoryMap } = useContext(CategoriesContext)
  const [products, setProducts] = useState(categoryMap[category])
  useEffect(() => {
    setProducts(categoryMap[category])
  }, [category, categoryMap])
  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryProductListContainer>
        {products &&
          products.map((product) => {
            return <ProductCard key={product.id} product={product} />
          })}
      </CategoryProductListContainer>
    </Fragment>
  )
}

export default Category
