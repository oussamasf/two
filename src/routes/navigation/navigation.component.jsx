import React from "react";
import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { UserContext } from "../../contexts/users.context";

import "./navigation.styles.css";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";

function Navigation() {
  const { currentUser } = useContext(UserContext);
  console.log("fff", currentUser);
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
          <Link className="sign-in-link" to="/auth">
            SIGN IN
          </Link>
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
