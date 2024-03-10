import { Outlet, Link } from "react-router-dom"
import { Fragment, useContext } from "react"

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg"
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
import { useSelector } from "react-redux"
import { userSelector } from "../../Store/user/user.selector"

const Navigation = () => {


  const currentUser = useSelector(userSelector)


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
