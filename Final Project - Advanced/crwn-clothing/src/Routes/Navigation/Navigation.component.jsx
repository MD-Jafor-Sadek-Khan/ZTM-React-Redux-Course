import { Outlet, Link } from "react-router-dom"
import { Fragment, useContext } from "react"

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg"
import { UserContext } from "../../Context/UserContext.context"
import { userSignOut } from "../../utils/Firebase-Utils/firebase.utils"
import CartIcon from "../../Components/Cart-Icon/CartIcon.component"
import { CartDropdown } from "../../Components/CartDropdown/CartDropdown.component"
import { CartIconContext } from "../../Context/CartIcon.context"
import {
  LogoContainerStyled,
  NavLinkStyled,
  NavLinksContainerStyled,
  NavigationStyled,
} from "./navigation.styles"

const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const { cartIconToggle } = useContext(CartIconContext)
  return (
    <Fragment>
      <NavigationStyled>
        <LogoContainerStyled to={"/"}>
          <CrwnLogo />
        </LogoContainerStyled>
        <NavLinksContainerStyled>
          <NavLinkStyled to={"/shop"}>SHOP</NavLinkStyled>
          {currentUser ? (
            <NavLinkStyled as={"span"} onClick={userSignOut}>
              SIGN OUT
            </NavLinkStyled>
          ) : (
            <NavLinkStyled to={"/auth"}>SIGN IN</NavLinkStyled>
          )}
          <CartIcon />
        </NavLinksContainerStyled>
        {cartIconToggle && <CartDropdown />}
      </NavigationStyled>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
