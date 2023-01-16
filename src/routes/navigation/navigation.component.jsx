import React from "react";
import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { UserContext } from "../../contexts/users.context";

import "./navigation.styles.css";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase";

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
          <Link className="nav-link" to="/shop">
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
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
