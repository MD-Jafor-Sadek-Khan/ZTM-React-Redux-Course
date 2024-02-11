import { createContext, useEffect, useState } from "react"

import PRODUCT_DATA from "../Shop-Data/shop_data.json"

export const ProductListContext = createContext({
  productList: [],
  setProductList: () => null,
})

export const ProductListProvider = ({ children }) => {
  const [productList, setProductList] = useState([])

  const value = { productList, setProductList }
  useEffect(() => {
    setProductList(PRODUCT_DATA)
  }, [])

  return (
    <ProductListContext.Provider value={value}>
      {children}
    </ProductListContext.Provider>
  )
}
