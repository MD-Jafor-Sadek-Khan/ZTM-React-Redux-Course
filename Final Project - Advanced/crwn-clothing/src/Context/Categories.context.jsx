import { createContext, useEffect, useState } from "react"

// import SHOP_DATA from "../Shop-Data/shop-data"
import { getCategoriesAndDocuments } from "../utils/Firebase-Utils/firebase.utils"

export const CategoriesContext = createContext({
  categoryMap: {},
})

export const CategoriesProvider = ({ children }) => {
  const [categoryMap, setCategoryMap] = useState({})

  const value = { categoryMap }
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments()
      setCategoryMap(categoryMap)
    }

    getCategoriesMap()
  }, [])

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  )
}
