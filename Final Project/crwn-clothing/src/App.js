import { Routes, Route } from "react-router-dom"

import Home from "./Routes/Home/Home.component"
import Navigation from "./Routes/Navigation/Navigation.component"
import SignIn from "./Routes/SignIn/SignIn.component"

const App = () => {
  const Shop = () => {
    return <h1>I am Shop</h1>
  }

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn/>}/>
      </Route>
    </Routes>
  )
}

export default App
