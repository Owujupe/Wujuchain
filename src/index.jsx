import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { WagmiProvider } from "wagmi";
import { WagmiWeb3ConfigProvider } from "@ant-design/web3-wagmi";
import { sepolia } from "wagmi/chains";
import { createConfig,http } from "wagmi";
import { injected } from "wagmi";
const root = ReactDOM.createRoot(document.getElementById("root"));
const config = createConfig({
  chains: [sepolia],
  transports: {
    // [mainnet.id]: http(),
    // [polygon.id]: http(),
    // [arbitrum.id]: http(),
    // [optimism.id]: http(),
    [sepolia.id]: http(),
  },
  connectors: [
    injected({
      target: "metaMask",
    }),
  ],
});
root.render(
  <React.StrictMode>
    <WagmiWeb3ConfigProvider config={config}>
      <App />
    </WagmiWeb3ConfigProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
