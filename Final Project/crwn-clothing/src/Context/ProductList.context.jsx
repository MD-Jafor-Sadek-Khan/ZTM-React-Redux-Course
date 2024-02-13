import { createContext, useEffect, useState } from "react"

import SHOP_DATA from "../Shop-Data/shop-data"
import { getCategoriesAndDocuments } from "../utils/Firebase-Utils/firebase.utils"

export const ProductListContext = createContext({
  productList: [],
  setProductList: () => null,
})

export const ProductListProvider = ({ children }) => {
  const [productList, setProductList] = useState([])

  const value = { productList, setProductList }
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments()
      console.log(categoryMap);
    }

    getCategoriesMap()
  }, [])

  return (
    <ProductListContext.Provider value={value}>
      {children}
    </ProductListContext.Provider>
  )
}
