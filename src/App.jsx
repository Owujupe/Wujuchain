import React from "react";
import { ConfigProvider } from "antd";
import theme from "./theme/themeConfig";
import "./styles/index.scss";
import Router from "./router";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastConfig = {
  autoClose: 2500,
  position: "bottom-left",
  transition: Slide,
  hideProgressBar: true,
};

function App() {
  return (
    <ConfigProvider theme={theme}>
      <Router />
      <ToastContainer {...toastConfig} />
    </ConfigProvider>
  );
}

export default App;
