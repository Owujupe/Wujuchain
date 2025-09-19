import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { createThirdwebClient } from "thirdweb";
import { createWallet, injectedProvider } from "thirdweb/wallets";
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
  const walletConnectProjectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID;

  // Create thirdweb client
  const client = createThirdwebClient({ clientId });

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
            {/* ✅ MetaMask button */}
            <button
              onClick={() =>
                connect(async () => {
                  try {
                    const wallet = createWallet("io.metamask");

                    // If injected provider exists (desktop), connect directly
                    if (injectedProvider("io.metamask")) {
                      await wallet.connect({ client });
                    } else {
                      // Otherwise use WalletConnect (mobile)
                      await wallet.connect({
                        client,
                        walletConnect: {
                          // projectId: walletConnectProjectId,
                          // showQrModal: true,
                          metadata: {
                            name: "Wujuchain",
                            description: "Connect your wallet to Wujuchain",
                            url: window.location.origin,
                            icons: [`${window.location.origin}/favicon.ico`],
                          },
                        },
                      });
                    }

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
              <img src={IMAGES.METAMASK_ICON} alt="MetaMask" />
            </button>

            {/* ✅ Coinbase button */}
            <button
              onClick={() =>
                connect(async () => {
                  try {
                    const wallet = createWallet("com.coinbase.wallet");

                    if (injectedProvider("com.coinbase.wallet")) {
                      await wallet.connect({ client });
                    } else {
                      await wallet.connect({
                        client,
                        walletConnect: {
                          // projectId: walletConnectProjectId,
                          // showQrModal: true,
                          metadata: {
                            name: "Wujuchain",
                            description: "Connect your wallet to Wujuchain",
                            url: window.location.origin,
                            icons: [`${window.location.origin}/favicon.ico`],
                          },
                        },
                      });
                    }

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
              <img src={IMAGES.COINBASE_ICON} alt="Coinbase" />
            </button>
          </>
        )}

        {/* Error message */}
        {connectionError && (
          <div className={styles.errorMessage}>
            <p>{connectionError}</p>
          </div>
        )}
      </div>
    </ModalComponent>
  );
};

export default ConnectModal;
