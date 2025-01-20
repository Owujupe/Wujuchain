import React from "react";
import { ConfigProvider } from 'antd';
import theme from './theme/themeConfig';
import "./styles/index.scss";
import Router from "./router";

function App() {
  return (
    <ConfigProvider theme={theme}>
      <Router />
    </ConfigProvider>
  );
}

export default App;
