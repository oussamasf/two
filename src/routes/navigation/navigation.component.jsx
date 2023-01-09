import React from "react";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.css";

function Navigation() {
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
          <Link className="sign-in-link" to="/sign-in">
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
