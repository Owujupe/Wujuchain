import React, { useLayoutEffect, useState, useEffect } from "react";
import { ROUTES } from "./routes";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { PrivateLayout, PublicLayout } from "./layout";
import {
  SignInPage,
  Home,
  CreateGroup,
  JoinGroup,
  GroupDetails,
  Dashboard,
  AdminDashboard,
} from "../pages";
import { useAccount } from "wagmi";

//Scroll to top on every route change
const ScrollToTop = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};
const AdminRoute = ({ children }) => {
  const { address, isConnected, isConnecting, isDisconnected } = useAccount();

  const connectedWallet = address;
  const adminWallet = import.meta.env.VITE_ADMIN_WALLET_ADDRESS;

  if (connectedWallet !== adminWallet) {
    return <Navigate to={ROUTES.APP} />;
  }

  return children;
};
const Router = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [routeName, setRouteName] = useState("");
  const RouteChangeTracker = () => {
    const location = useLocation();
    useEffect(() => {
      setRouteName(location.pathname);
    }, [location]);

    return null;
  };
  return (
    <BrowserRouter>
      <ScrollToTop>
        <RouteChangeTracker />
        <Routes>
          <Route element={<PublicLayout isLoggedIn={isLoggedIn} />}>
            <Route
              path={ROUTES.SIGNIN}
              element={
                <SignInPage
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                />
              }
            />
          </Route>

          <Route
            element={
              <PrivateLayout
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                routeName={routeName}
              />
            }
          >
            <Route
              path={ROUTES.ADMIN}
              element={
                <AdminRoute>
                  <AdminDashboard />
                </AdminRoute>
              }
            />
            <Route path={ROUTES.APP} element={<Home />} />
            <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
            <Route path={ROUTES.GROUP_DETAILS} element={<GroupDetails />} />
            <Route path={ROUTES.CREATE_GROUP} element={<CreateGroup />} />
            <Route path={ROUTES.JOIN_GROUP} element={<JoinGroup />} />
          </Route>

          <Route path="*" element={<Navigate to={ROUTES.SIGNIN} />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default Router;
