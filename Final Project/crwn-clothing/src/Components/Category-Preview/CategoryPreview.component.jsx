import ProductCard from "../Product-Card/ProductCard.component"
import "./category-preview.styles.scss"

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <span className="title">{title}</span>
      </h2>
      <div className="preview">
        {products
          .filter((_, index) => index < 4)
          .map((product) => {
            return <ProductCard key={product.id} product={product} />
          })}
      </div>
    </div>
  )
}

export default CategoryPreview