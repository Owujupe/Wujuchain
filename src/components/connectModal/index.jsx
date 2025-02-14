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
    chains: [sepolia, mainnet],
    transports: {
      [sepolia.id]: http(),
    },
    connectors: [
      injected({
        target: "metaMask", // Targets MetaMask specifically
      }),
    ],
  });
  const { connect, isConnected, error } = useConnect();

  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        await window.ethereum.request({
          method: "wallet_requestPermissions",
          params: [{ eth_accounts: {} }],
        });
        console.log("Permissions granted.");
      }
      // Then connect using wagmi's connect
      await connect(); // Assuming connect() is the method to connect the wallet
    } catch (error) {
      console.error("Connection failed, retrying...", error);
    }
  };
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
      chains={[sepolia, mainnet]}
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
