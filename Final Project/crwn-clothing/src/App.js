import { Routes, Route } from "react-router-dom"

import Home from "./Routes/Home/Home.component"
import Navigation from "./Routes/Navigation/Navigation.component"
import Authentication from "./Routes/Authentication/Authentication.component"
import Shop from "./Routes/Shop/Shop.component"
import Checkout from "./Components/Checkout/Checkout.component"
import Category from "./Routes/Category/Category.component"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop/">
          <Route index element={<Shop />} />
          <Route path="hats" element={<Category />} />
          <Route path="jackets" element={<Category />} />
          <Route path="mens" element={<Category />} />
          <Route path="sneakers" element={<Category />} />
          <Route path="womens" element={<Category />} />
        </Route>
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}

export default App
