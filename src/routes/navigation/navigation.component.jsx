import React, { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { UserContext } from "../../contexts/users.context";
import { CartContext } from "../../contexts/cart.context";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import {
  NavigationContainer,
  LinksContainer,
  InLink,
} from "./navigation.styles.jsx";
function Navigation() {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  return (
    <Fragment>
      <NavigationContainer>
        <Link className="logo-container" to="/">
          <div>
            <CrownLogo className="logo"></CrownLogo>
          </div>
        </Link>

        <LinksContainer>
          <InLink to="/shop">SHOP</InLink>
          {currentUser ? (
            <InLink as="span">SIGN OUT</InLink>
          ) : (
            <InLink to="/auth">SIGN IN</InLink>
          )}

          <InLink to="/sandbox">play-around</InLink>
          <CartIcon className="cart-icon" />
        </LinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
