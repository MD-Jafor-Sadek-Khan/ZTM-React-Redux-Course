import CategoriesPreview from "../../Components/Categories-Preview/CategoriesPreview.component"

import { Route, Routes } from "react-router-dom"
import Category from "../../Components/Category/Category.component"

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />}/>
      <Route path=":category" element={<Category/>}/>
    </Routes>
  )
}

export default Shop
