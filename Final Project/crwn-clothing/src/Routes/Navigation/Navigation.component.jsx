import { Outlet, Link } from "react-router-dom"
import { Fragment, useContext } from "react"

import "./navigation.styles.scss"
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg"
import { UserContext } from "../../Context/UserContext.component"
import { userSignOut } from "../../utils/Firebase-Utils/firebase.utils"

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext)

  const handleSignOut = async () => {
    await userSignOut()
    setCurrentUser(null)
  }

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
            <span className="nav-link" onClick={handleSignOut}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to={"/auth"}>
              SignIn
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
