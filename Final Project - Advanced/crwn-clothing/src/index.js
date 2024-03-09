import React from "react"
import ReactDOM from "react-dom/client"
import "./index.scss"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter } from "react-router-dom"
import { UserProvider } from "./Context/UserContext.context"
import { CartIconContextProvider } from "./Context/CartIcon.context"
import { CategoriesProvider } from "./Context/Categories.context"
import { Provider } from "react-redux"
import { store } from "./Store/store"


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <UserProvider>
          <CategoriesProvider>
            <CartIconContextProvider>
              <App />
            </CartIconContextProvider>
          </CategoriesProvider>
        </UserProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
