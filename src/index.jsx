import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { WagmiWeb3ConfigProvider } from "@ant-design/web3-wagmi";
import { mainnet, sepolia, polygonAmoy, polygon } from "wagmi/chains";
import { createConfig, http } from "wagmi";
import { injected } from "wagmi";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const root = ReactDOM.createRoot(document.getElementById("root"));
const config = createConfig({
  chains: [polygonAmoy, polygon],
  transports: {
    [polygon.id]: http(),
   
    [polygonAmoy.id]: http(),
  },
  connectors: [
    injected({
      target: "metaMask",
    }),
  ],
});
const queryClient = new QueryClient();
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {" "}
      <WagmiProvider config={config}>
        <App />
      </WagmiProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
