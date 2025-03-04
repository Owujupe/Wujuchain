import React, { Fragment } from "react";
import { Outlet, Navigate } from "react-router-dom";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import { ROUTES } from "./routes";

export const PrivateLayout = ({ isLoggedIn, setIsLoggedIn, routeName }) => {
  return isLoggedIn ? (
    <Fragment>
      <div className="main-wraper">
        <Sidebar routeName={routeName} />
        <div className="content-wraper">
          <Header  />
          <div className="scrollable-content">
            <Outlet />
          </div>
        </div>
      </div>
    </Fragment>
  ) : (
    <Navigate to={ROUTES.SIGNIN} />
  );
};

export const PublicLayout = ({ isLoggedIn }) => {
  return isLoggedIn ? <Navigate to={ROUTES.APP} /> : <Outlet />;
};
