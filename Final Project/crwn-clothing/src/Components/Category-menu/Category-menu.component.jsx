import CategoryItem from "../Category-item/category-item.component"
import "./categories.styles.scss"

const CategoryMenu = ({categories}) => {


  return (
    <div className="categories-container">
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />
      })}
    </div>
  )
}

export default CategoryMenu
