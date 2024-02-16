import { Routes, Route } from "react-router-dom"

import Home from "./Routes/Home/Home.component"
import Navigation from "./Routes/Navigation/Navigation.component"
import Authentication from "./Routes/Authentication/Authentication.component"
import Shop from "./Routes/Shop/Shop.component"
import Checkout from "./Components/Checkout/Checkout.component"

const App = () => {


  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication/>}/>
        <Route path="checkout" element={<Checkout/>}/>
      </Route>
    </Routes>
  )
}

export default App
