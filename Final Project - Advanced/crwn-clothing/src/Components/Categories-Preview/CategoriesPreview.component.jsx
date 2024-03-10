import { Fragment } from "react"

import { CategoryPreviewProductListContainer } from "./categories-preview.styles.jsx"
import { useSelector } from "react-redux"
import { categoryMapSelector } from "../../Store/categories/category.selectors.js"
const CategoriesPreview = () => {
  const categoryMap = useSelector((state) => categoryMapSelector(state))
  return (
    <Fragment>
      {Object.keys(categoryMap).map((category) => {
        const product = categoryMap[category]
        return (
          <CategoryPreviewProductListContainer
            key={category}
            title={category.toUpperCase()}
            products={product}
          />
        )
      })}
    </Fragment>
  )
}

export default CategoriesPreview
