import React from "react";
import { ConnectModal as Modal } from "@ant-design/web3";
import {
  metadata_CoinbaseWallet,
  metadata_MetaMask,
} from "@ant-design/web3-assets";
import styles from "./styles.module.scss";

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
  const walletList = [metadata_MetaMask, metadata_CoinbaseWallet];
  return (
    <Modal
      title={<Title />}
      open={open}
      onCancel={() => setOpen(false)}
      mode="simple"
      group={false}
      walletList={walletList}
      maskClosable={false}
      {...props}
      footer={<Footer />}
      guide={false}
    />
  );
};

export default ConnectModal;
