import React, { useLayoutEffect, useState } from "react";
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
} from "../pages";

//Scroll to top on every route change
const ScrollToTop = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

const Router = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <BrowserRouter>
      <ScrollToTop>
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

          <Route element={<PrivateLayout isLoggedIn={isLoggedIn} />}>
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
    // </WagmiWeb3ConfigProvider>
  );
};

export default Router;
