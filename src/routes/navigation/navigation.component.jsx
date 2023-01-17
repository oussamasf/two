import React, { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { UserContext } from "../../contexts/users.context";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { signOutUser } from "../../utils/firebase";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import "./navigation.styles.css";

function Navigation() {
  const { currentUser } = useContext(UserContext);
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div>
            <CrownLogo className="logo"></CrownLogo>
          </div>
        </Link>

        <div className="links-container">
          <Link className="sign-in-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="sign-in-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="sign-in-link" to="/auth">
              SIGN IN
            </Link>
          )}

          <Link className="sign-in-link" to="/sandbox">
            play-around
          </Link>
          <CartIcon className="cart-icon" />
        </div>
        <CartDropdown />
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
