import React, {useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { createWallet } from "thirdweb/wallets";
import ModalComponent from "../modal";
import { useConnect } from "thirdweb/react";
import { IMAGES } from "../../constants/assets";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import ToastMessage from "../toast";

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

const ConnectModal = ({
  onOpen,
  setOpen,
  groupOrder,
  disconnect,
  isLoggedIn,
  className,
  onCancel,
}) => {
  const clientId = import.meta.env.VITE_PUBLIC_THIRDWEB_CLIENT_ID;

  const { connect, isConnecting, error } = useConnect();
  const [connectionError, setConnectionError] = useState(null);
  // Handle connection errors
  useEffect(() => {
    if (error) {
      setConnectionError(error.message);
      toast.error(<ToastMessage message={error.message} />);
    }
  }, [error]);

  return (
    <ModalComponent modalOpen={onOpen} title={<Title />} footer={<Footer />}>
      <div className={styles.buttonContainer}>
        {isConnecting && (
          <div className={styles.spinnerContainer}>
            <Spin
              indicator={
                <LoadingOutlined
                  spin
                  style={{ color: "#7A28FF", fontSize: 24 }}
                />
              }
              size="large"
            />
            <p className={styles.loadingText}>Connecting...</p>
          </div>
        )}

        {!isConnecting && (
          <>
            <button
              onClick={() =>
                connect(async () => {
                  try {
                    const wallet = createWallet("io.metamask");
                    await wallet.connect({ clientId });
                    toast.success(
                      <ToastMessage message={"Connected to MetaMask"} />
                    );
                    setConnectionError(null);
                    return wallet;
                  } catch (err) {
                    setConnectionError(err.message);
                    throw err;
                  }
                })
              }
              className={styles.walletButton}
            >
              <span>MetaMask</span>
              <img src={IMAGES.METAMASK_ICON} alt="right-arrow" />
            </button>
            <button
              onClick={() =>
                connect(async () => {
                  try {
                    const wallet = createWallet("com.coinbase.wallet");
                    await wallet.connect({ clientId });
                    toast.success(
                      <ToastMessage message={"Connected to Coinbase Wallet"} />
                    );
                    setConnectionError(null);
                    return wallet;
                  } catch (err) {
                    setConnectionError(err.message);
                    throw err;
                  }
                })
              }
              className={styles.walletButton}
            >
              <span>Coinbase Wallet</span>
              <img src={IMAGES.COINBASE_ICON} alt="right-arrow" />
            </button>
          </>
        )}
      </div>
    </ModalComponent>
  );
};

export default ConnectModal;
