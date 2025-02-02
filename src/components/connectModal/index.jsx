import React, { useEffect } from "react";
import { ConnectButton, Connector } from "@ant-design/web3";
import styles from "./styles.module.scss";
import {
  WagmiWeb3ConfigProvider,
  MetaMask,
  CoinbaseWallet,
} from "@ant-design/web3-wagmi";
import { createConfig, http } from "wagmi";
import {
  arbitrum,
  mainnet,
  optimism,
  polygon,
  sepolia,
  mintSepoliaTestnet,
  baseSepolia,
} from "wagmi/chains";
import { injected } from "wagmi/connectors";

const Title = () => {
  return <span className={styles.header}>Connect Wallet</span>;
};

const Footer = () => {
  return (
    <div className={styles.modalFooter}>
      <div className={styles.emailOption}>Use Email instead</div>
      <div className={styles.termsText}>
        By connecting your wallet, you agree to our{" "}
        <a href="/terms">Terms of Service</a> and our{" "}
        <a href="/privacy">Privacy Policy</a>
      </div>
    </div>
  );
};

const ConnectModal = ({ open, setOpen, groupOrder, ...props }) => {
  
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
  return (
    <WagmiWeb3ConfigProvider
      config={config}
      eip6963={{
        reconnectPreviousSession: true,
      }}
      wallets={[MetaMask(), CoinbaseWallet()]}
      chains={[sepolia]}
    >
      <Connector
        children
        modalProps={{
          title: <Title />,
          open: open,
          onCancel: () => setOpen(false),
          mode: "simple",
          group: false,
          maskClosable: false,
          footer: <Footer />,
          guide: false,
        }}
        onConnected={(account) => {
          setOpen(false);
        }}
        onDisconnect={(data) => {
          data?.preventDefault?.();
          console.log(data, "Disconnected");
        }}
      >
        <ConnectButton style={{ display: "none" }} />
      </Connector>
    </WagmiWeb3ConfigProvider>
  );
};

export default ConnectModal;
