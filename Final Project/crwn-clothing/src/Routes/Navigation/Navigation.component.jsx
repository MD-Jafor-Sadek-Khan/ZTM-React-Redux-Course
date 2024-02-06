import { Outlet, Link } from "react-router-dom"
import { Fragment } from "react"

import "./navigation.styles.scss"
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg"


const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link to={"/"}>
          <div className="logo-container">
            <CrwnLogo/>
          </div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to={"/shop"}>
            Shop
          </Link>
          <Link className="nav-link" to={'/sign-in'}>
            SignIn
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
