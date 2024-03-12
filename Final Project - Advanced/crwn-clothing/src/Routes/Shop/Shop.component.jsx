import CategoriesPreview from "../../Components/Categories-Preview/CategoriesPreview.component"

import { Route, Routes } from "react-router-dom"
import Category from "../../Components/Category/Category.component"
import { useEffect } from "react"
import { fetchCategoriesAsync, setCategoryMap } from "../../Store/categories/category.actions"
import { useDispatch } from "react-redux"

const Shop = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategoriesAsync())
  }, [])

  return (
    <Routes>
      <Route index element={<CategoriesPreview />}/>
      <Route path=":category" element={<Category/>}/>
    </Routes>
  )
}

export default Shop
