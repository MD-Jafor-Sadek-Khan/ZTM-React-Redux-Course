import { createContext, useState } from "react"

export const CategoryStateContext = createContext({
  currentCategory: "",
  setCurrentCategory: () => {},
})

export const CategoryStateProvider = ({ children }) => {
  const [currentCategory, setCurrentCategory] = useState("")


  const value = { currentCategory, setCurrentCategory }
  return (
    <CategoryStateContext.Provider value={value}>
      {children}
    </CategoryStateContext.Provider>
  )
}
