import { Outlet } from "react-router-dom"
import { Fragment } from "react"

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg"
import { userSignOut } from "../../utils/Firebase-Utils/firebase.utils"
import CartIcon from "../../Components/Cart-Icon/CartIcon.component"
import { CartDropdown } from "../../Components/CartDropdown/CartDropdown.component"
import {
  LogoContainerStyled,
  NavLinkStyled,
  NavLinksContainerStyled,
  NavigationStyled,
} from "./navigation.styles"
import { useSelector } from "react-redux"
import { userSelector } from "../../Store/user/user.selector"
import { selectCartToggle } from "../../Store/cart/cart.selectors"

const Navigation = () => {


  const currentUser = useSelector(userSelector)

  const cartToggle = useSelector(selectCartToggle)
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
        {cartToggle && <CartDropdown />}
      </NavigationStyled>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
