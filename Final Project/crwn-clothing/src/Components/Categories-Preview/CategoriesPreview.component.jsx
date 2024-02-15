import { Fragment, useContext } from "react"
import { CategoriesContext } from "../../Context/Categories.context"
import CategoryPreview from "../Category-Preview/CategoryPreview.component"

import "./categories-preview.styles.scss"
const CategoriesPreview = () => {
  const { categoryMap } = useContext(CategoriesContext)
  return (
    <Fragment>
      {Object.keys(categoryMap).map((category) => {
        const product = categoryMap[category]
        return (
          <CategoryPreview
            className="product-list-container"
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
