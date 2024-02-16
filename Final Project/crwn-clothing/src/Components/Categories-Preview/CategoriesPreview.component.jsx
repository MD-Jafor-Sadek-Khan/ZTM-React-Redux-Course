import { Fragment, useContext } from "react"
import { CategoriesContext } from "../../Context/Categories.context"

import { CategoryPreviewProductListContainer } from "./categories-preview.styles.jsx"
const CategoriesPreview = () => {
  const { categoryMap } = useContext(CategoriesContext)
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
