import React, { Fragment, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import { ROUTES } from "./routes";

export const PrivateLayout = ({ isLoggedIn, setIsLoggedIn, routeName }) => {
  const [isOpen, setIsOpen] = useState(false);

  return isLoggedIn ? (
    <Fragment>
      {/* Backdrop overlay to block all clicks outside sidebar */}
      {isOpen && (
        <div
          className="backdrop-overlay"
          onClick={() => setIsOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0, 0, 0, 0.3)",
            zIndex: 999,
            cursor: "pointer",
          }}
        />
      )}

      <div className="main-wraper">
        <Sidebar routeName={routeName} isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="content-wraper">
          <Header />
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
