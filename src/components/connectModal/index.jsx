import React, { useEffect } from "react";
import { ConnectButton, Connector } from "@ant-design/web3";
import styles from "./styles.module.scss";
import {
  WagmiWeb3ConfigProvider,
  MetaMask,
  CoinbaseWallet,
} from "@ant-design/web3-wagmi";
import { createConfig, http } from "wagmi";
import { polygon, polygonAmoy } from "wagmi/chains";
import { coinbaseWallet, injected, metaMask } from "wagmi/connectors";
import { useConnect } from "wagmi";

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

const ConnectModal = ({ open, setOpen, groupOrder, disconnect, ...props }) => {
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
  

  return (
    <WagmiWeb3ConfigProvider
      config={config}
      eip6963={
        {
          // reconnectPreviousSession: true,
        }
      }
      // ens
      wallets={[MetaMask(), CoinbaseWallet()]}
      chains={[polygonAmoy, polygon]}
      // reconnectOnMount
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
          closable: false,
        }}
        onConnected={(account) => {
          setOpen(false);
        }}
        onDisconnect={(data) => {
          data?.preventDefault?.();

          // disconnect?.(); // Call the disconnect function
        }}
      >
        <ConnectButton style={{ display: "none" }} />
      </Connector>
    </WagmiWeb3ConfigProvider>
  );
};

export default ConnectModal;
