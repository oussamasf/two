import React from "react";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";

function Navigation() {
  return (
    <Fragment>
      <div className="navigation">
        <h1>this is a NAVBAR</h1>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
