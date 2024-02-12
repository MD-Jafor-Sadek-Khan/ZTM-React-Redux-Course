import { Outlet, Link } from "react-router-dom"
import { Fragment, useContext } from "react"

import "./navigation.styles.scss"
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg"
import { UserContext } from "../../Context/UserContext.context"
import { userSignOut } from "../../utils/Firebase-Utils/firebase.utils"
import CartIcon from "../../Components/Cart-Icon/CartIcon.component"
import { CartDropdown } from "../../Components/CartDropdown/CartDropdown.component"
import { CartIconContext } from "../../Context/CartIcon.context"

const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const { cartIconToggle } = useContext(CartIconContext)
  return (
    <Fragment>
      <div className="navigation">
        <Link to={"/"}>
          <div className="logo-container">
            <CrwnLogo />
          </div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to={"/shop"}>
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={userSignOut}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to={"/auth"}>
              SignIn
            </Link>
          )}
          <CartIcon />
        </div>
        {cartIconToggle && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
