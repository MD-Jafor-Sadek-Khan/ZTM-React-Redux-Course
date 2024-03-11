import CategoriesPreview from "../../Components/Categories-Preview/CategoriesPreview.component"

import { Route, Routes } from "react-router-dom"
import Category from "../../Components/Category/Category.component"
import { getCategoriesAndDocuments } from "../../utils/Firebase-Utils/firebase.utils"
import { useEffect } from "react"
import { setCategoryMap } from "../../Store/categories/category.actions"
import { useDispatch } from "react-redux"

const Shop = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    const getCategoriesArray = async () => {
      const categoryArray = await getCategoriesAndDocuments()
      dispatch(setCategoryMap(categoryArray))
    }

    getCategoriesArray()
  }, [])

  return (
    <Routes>
      <Route index element={<CategoriesPreview />}/>
      <Route path=":category" element={<Category/>}/>
    </Routes>
  )
}

export default Shop
