// import React, {useState, useEffect } from "react";
// import styles from "./styles.module.scss";
// import { createWallet } from "thirdweb/wallets";
// import ModalComponent from "../modal";
// import { useConnect } from "thirdweb/react";
// import { IMAGES } from "../../constants/assets";
// import { Spin } from "antd";
// import { LoadingOutlined } from "@ant-design/icons";
// import { toast } from "react-toastify";
// import ToastMessage from "../toast";

// const Title = () => {
//   return <span className={styles.header}>Connect Wallet</span>;
// };

// const Footer = () => {
//   return (
//     <div className={styles.modalFooter}>
//       <div className={styles.emailOption}>Use Email instead</div>
//       <div className={styles.termsText}>
//         By connecting your wallet, you agree to our{" "}
//         <a href="/terms">Terms of Service</a> and our{" "}
//         <a href="/privacy">Privacy Policy</a>
//       </div>
//     </div>
//   );
// };

// const ConnectModal = ({
//   onOpen,
//   setOpen,
//   groupOrder,
//   disconnect,
//   isLoggedIn,
//   className,
//   onCancel,
// }) => {
//   const clientId = import.meta.env.VITE_PUBLIC_THIRDWEB_CLIENT_ID;

//   const { connect, isConnecting, error } = useConnect();
//   const [connectionError, setConnectionError] = useState(null);
//   // Handle connection errors
//   useEffect(() => {
//     if (error) {
//       setConnectionError(error.message);
//       toast.error(<ToastMessage message={error.message} />);
//     }
//   }, [error]);

//   return (
//     <ModalComponent modalOpen={onOpen} title={<Title />} footer={<Footer />}>
//       <div className={styles.buttonContainer}>
//         {isConnecting && (
//           <div className={styles.spinnerContainer}>
//             <Spin
//               indicator={
//                 <LoadingOutlined
//                   spin
//                   style={{ color: "#7A28FF", fontSize: 24 }}
//                 />
//               }
//               size="large"
//             />
//             <p className={styles.loadingText}>Connecting...</p>
//           </div>
//         )}

//         {!isConnecting && (
//           <>
//             <button
//               onClick={() =>
//                 connect(async () => {
//                   try {
//                     const wallet = createWallet("io.metamask");
//                     await wallet.connect({ clientId });
//                     toast.success(
//                       <ToastMessage message={"Connected to MetaMask"} />
//                     );
//                     setConnectionError(null);
//                     return wallet;
//                   } catch (err) {
//                     setConnectionError(err.message);
//                     throw err;
//                   }
//                 })
//               }
//               className={styles.walletButton}
//             >
//               <span>MetaMask</span>
//               <img src={IMAGES.METAMASK_ICON} alt="right-arrow" />
//             </button>
//             <button
//               onClick={() =>
//                 connect(async () => {
//                   try {
//                     const wallet = createWallet("com.coinbase.wallet");
//                     await wallet.connect({ clientId });
//                     toast.success(
//                       <ToastMessage message={"Connected to Coinbase Wallet"} />
//                     );
//                     setConnectionError(null);
//                     return wallet;
//                   } catch (err) {
//                     setConnectionError(err.message);
//                     throw err;
//                   }
//                 })
//               }
//               className={styles.walletButton}
//             >
//               <span>Coinbase Wallet</span>
//               <img src={IMAGES.COINBASE_ICON} alt="right-arrow" />
//             </button>
//           </>
//         )}
//       </div>
//     </ModalComponent>
//   );
// };

// export default ConnectModal;


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
                          projectId: walletConnectProjectId,
                          showQrModal: true,
                          metadata: {
                            name: "Spice N Bites",
                            description: "Connect your wallet to Spice N Bites",
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
                          projectId: walletConnectProjectId,
                          showQrModal: true,
                          metadata: {
                            name: "Spice N Bites",
                            description: "Connect your wallet to Spice N Bites",
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

// import React, { useState, useEffect } from "react";
// import styles from "./styles.module.scss";
// import { createWallet } from "thirdweb/wallets";
// import ModalComponent from "../modal";
// import { useConnect } from "thirdweb/react";
// import { IMAGES } from "../../constants/assets";
// import { Spin } from "antd";
// import { LoadingOutlined } from "@ant-design/icons";
// import { toast } from "react-toastify";
// import ToastMessage from "../toast";

// // Helper: Detect if dApp is running inside the MetaMask in-app browser
// const isMetaMaskInAppBrowser = () => {
//   const ua = navigator.userAgent || "";
//   return ua.toLowerCase().includes("metamask");
// };

// const isMobileDevice = () => {
//   const ua = navigator.userAgent.toLowerCase();
//   return (
//     /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(ua) ||
//     (("ontouchstart" in window || navigator.maxTouchPoints > 0) &&
//       window.innerWidth <= 768)
//   );
// };

// const Title = () => <span className={styles.header}>Connect Wallet</span>;

// const Footer = () => (
//   <div className={styles.modalFooter}>
//     <div className={styles.emailOption}>Use Email instead</div>
//     <div className={styles.termsText}>
//       By connecting your wallet, you agree to our{" "}
//       <a href="/terms">Terms of Service</a> and our{" "}
//       <a href="/privacy">Privacy Policy</a>
//     </div>
//   </div>
// );

// const ConnectModal = ({ onOpen, setOpen }) => {
//   const clientId = import.meta.env.VITE_PUBLIC_THIRDWEB_CLIENT_ID;
//   const walletConnectProjectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID;
//   const { connect, isConnecting, error } = useConnect();

//   const [connectionError, setConnectionError] = useState(null);
//   const [isMobile, setIsMobile] = useState(isMobileDevice());
//   const [isMetaMaskBrowser, setIsMetaMaskBrowser] = useState(
//     isMetaMaskInAppBrowser(),
//   );

//   useEffect(() => {
//     // Update on window resize or navigation (edge case)
//     const handleUpdate = () => {
//       setIsMobile(isMobileDevice());
//       setIsMetaMaskBrowser(isMetaMaskInAppBrowser());
//     };
//     window.addEventListener("resize", handleUpdate);
//     window.addEventListener("focus", handleUpdate);
//     return () => {
//       window.removeEventListener("resize", handleUpdate);
//       window.removeEventListener("focus", handleUpdate);
//     };
//   }, []);

//   useEffect(() => {
//     if (error) {
//       setConnectionError(error.message);
//       toast.error(<ToastMessage message={error.message} />);
//     }
//   }, [error]);
//   useEffect(() => {
//     if (isMetaMaskInAppBrowser() && onOpen) {
//       connect(connectMetaMaskInjected);
//     }
//   }, [onOpen]);
//   // CORE LOGIC: Always prefer WalletConnect on mobile unless in MetaMask browser
//   const connectViaWalletConnect = async () => {
//     try {
//       setConnectionError(null);
//       const wallet = createWallet("walletConnect");

//       await wallet.connect({
//         clientId,
//         walletConnect: {
//           projectId: walletConnectProjectId,
//           metadata: {
//             name: "Spice N Bites",
//             description: "Connect your wallet to Spice N Bites",
//             url: window.location.origin,
//             icons: [`${window.location.origin}/favicon.ico`],
//           },
//           showQrModal: true,
//           qrModalOptions: {
//             themeMode: "light",
//             themeVariables: { "--wcm-z-index": "2000" },
//           },
//         },
//       });
//       toast.success(<ToastMessage message="Connected via WalletConnect!" />);
//       setOpen(false);
//       return wallet;
//     } catch (err) {
//       setConnectionError(err.message);
//       toast.error(<ToastMessage message={err.message} />);
//       throw err;
//     }
//   };

//   const connectMetaMaskInjected = async () => {
//     try {
//       setConnectionError(null);
//       const wallet = createWallet("io.metamask");
//       await wallet.connect({ clientId });
//       toast.success(<ToastMessage message="Connected to MetaMask!" />);
//       setOpen(false);
//       return wallet;
//     } catch (err) {
//       setConnectionError(err.message);
//       toast.error(<ToastMessage message={err.message} />);
//       throw err;
//     }
//   };

//   const handleMetaMaskMobileDeepLink = () => {
//     // DEEP LINK: Opens MetaMask App with dapp loaded, per MetaMask docs
//     const siteUrl =
//       window.location.host + window.location.pathname + window.location.search;
//     const deepLink = `metamask://dapp/${siteUrl}`;
//     const fallBack = `https://metamask.app.link/dapp/${window.location.host}${window.location.pathname}`;
//     // Show instructions for user
//     toast.info(
//       <ToastMessage message="Opening MetaMask app. Complete the connection there. If nothing happens, open the site in your MetaMask app's browser." />,
//     );
//     window.location.href = deepLink;
//     // Fallback after 1.5s for iOS/Android if nothing happens (not all OSes support 'metamask://' directly)
//     setTimeout(() => {
//       window.open(fallBack, "_blank");
//     }, 1500);
//   };

//   // Choose Modal Content Dynamically
//   const renderWalletOptions = () => {
//     // Mobile (NOT in MetaMask app browser): Show ONLY WalletConnect, and deep link option as secondary
//     if (isMobile && !isMetaMaskBrowser) {
//       return (
//         <>
//           <button
//             onClick={() => connect(connectViaWalletConnect)}
//             className={styles.walletButton}
//           >
//             <span>
//               WalletConnect
//               <br />
//               <small style={{ color: "#888", fontSize: "12px" }}>
//                 Recommended for MetaMask, Trust, Rainbow, etc.
//               </small>
//             </span>
//             <img
//               src={IMAGES.WALLETCONNECT_ICON || "/walletconnect-icon.svg"}
//               alt="WalletConnect"
//             />
//           </button>
//           <div style={{ margin: "16px 0 0 0", textAlign: "center" }}>
//             <strong>MetaMask User?</strong>
//             <br />
//             <button
//               onClick={handleMetaMaskMobileDeepLink}
//               style={{
//                 marginTop: "8px",
//                 background: "#fff",
//                 color: "#f6851b",
//                 border: "1px solid #f6851b",
//                 borderRadius: "4px",
//                 padding: "8px 18px",
//                 fontWeight: 500,
//                 cursor: "pointer",
//                 fontSize: "14px",
//               }}
//             >
//               Open in MetaMask App
//             </button>
//             <div
//               style={{
//                 fontSize: "12px",
//                 opacity: 0.7,
//                 marginTop: "6px",
//                 lineHeight: "1.5",
//               }}
//             >
//               This will load your dApp inside MetaMask's browser. To connect
//               normally, use WalletConnect.
//             </div>
//           </div>
//         </>
//       );
//     }
//     // MetaMask browser (desktop or in-app browser) - connect injected
//     return (
//       <>
//         <button
//           onClick={() => connect(connectMetaMaskInjected)}
//           className={styles.walletButton}
//         >
//           <span>MetaMask</span>
//           <img src={IMAGES.METAMASK_ICON} alt="MetaMask" />
//         </button>
//         <button
//           onClick={() => connect(connectViaWalletConnect)}
//           className={styles.walletButton}
//         >
//           <span>WalletConnect</span>
//           <img
//             src={IMAGES.WALLETCONNECT_ICON || "/walletconnect-icon.svg"}
//             alt="WalletConnect"
//           />
//         </button>
//         <button
//           onClick={() =>
//             connect(() =>
//               createWallet("com.coinbase.wallet").connect({ clientId }),
//             )
//           }
//           className={styles.walletButton}
//         >
//           <span>Coinbase Wallet</span>
//           <img src={IMAGES.COINBASE_ICON} alt="Coinbase Wallet" />
//         </button>
//       </>
//     );
//   };

//   return (
//     <ModalComponent modalOpen={onOpen} title={<Title />} footer={<Footer />}>
//       <div className={styles.buttonContainer}>
//         {isConnecting ? (
//           <div className={styles.spinnerContainer}>
//             <Spin
//               indicator={
//                 <LoadingOutlined
//                   spin
//                   style={{ color: "#7A28FF", fontSize: 24 }}
//                 />
//               }
//               size="large"
//             />
//             <p className={styles.loadingText}>Connecting...</p>
//           </div>
//         ) : (
//           renderWalletOptions()
//         )}
//         {connectionError && (
//           <div className={styles.errorMessage}>
//             <p>{connectionError}</p>
//             <button
//               onClick={() => setConnectionError(null)}
//               style={{
//                 marginTop: "8px",
//                 padding: "6px 12px",
//                 background: "transparent",
//                 border: "1px solid #ccc",
//                 borderRadius: "4px",
//                 cursor: "pointer",
//                 fontSize: "12px",
//               }}
//             >
//               Dismiss
//             </button>
//           </div>
//         )}
//       </div>
//     </ModalComponent>
//   );
// };

// export default ConnectModal;
// import React, { useState, useEffect } from "react";
// import styles from "./styles.module.scss";
// import { createWallet } from "thirdweb/wallets";
// import ModalComponent from "../modal";
// import { useConnect } from "thirdweb/react";
// import { IMAGES } from "../../constants/assets";
// import { Spin } from "antd";
// import { LoadingOutlined } from "@ant-design/icons";
// import { toast } from "react-toastify";
// import ToastMessage from "../toast";

// // Helper: Detect if dApp is running inside the MetaMask in-app browser
// const isMetaMaskInAppBrowser = () => {
//   const ua = navigator.userAgent || "";
//   return ua.toLowerCase().includes("metamask");
// };

// const isMobileDevice = () => {
//   const ua = navigator.userAgent.toLowerCase();
//   return (
//     /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(ua) ||
//     (("ontouchstart" in window || navigator.maxTouchPoints > 0) &&
//       window.innerWidth <= 768)
//   );
// };

// const Title = () => <span className={styles.header}>Connect Wallet</span>;

// const Footer = () => (
//   <div className={styles.modalFooter}>
//     <div className={styles.emailOption}>Use Email instead</div>
//     <div className={styles.termsText}>
//       By connecting your wallet, you agree to our{" "}
//       <a href="/terms">Terms of Service</a> and our{" "}
//       <a href="/privacy">Privacy Policy</a>
//     </div>
//   </div>
// );

// const ConnectModal = ({ onOpen, setOpen }) => {
//   const clientId = import.meta.env.VITE_PUBLIC_THIRDWEB_CLIENT_ID;
//   // const walletConnectProjectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID;
//   const { connect, isConnecting, error } = useConnect();

//   const [connectionError, setConnectionError] = useState(null);
//   const [isMobile, setIsMobile] = useState(isMobileDevice());
//   const [isMetaMaskBrowser, setIsMetaMaskBrowser] = useState(
//     isMetaMaskInAppBrowser(),
//   );

//   // Debug logging for environment variables
//   useEffect(() => {
//     console.log("Environment check:", {
//       clientId: clientId ? "✓ Set" : "✗ Missing",
//       // walletConnectProjectId: walletConnectProjectId ? "✓ Set" : "✗ Missing",
//       isMobile,
//       isMetaMaskBrowser
//     });
//   }, [clientId, isMobile, isMetaMaskBrowser]);

//   useEffect(() => {
//     // Update on window resize or navigation (edge case)
//     const handleUpdate = () => {
//       setIsMobile(isMobileDevice());
//       setIsMetaMaskBrowser(isMetaMaskInAppBrowser());
//     };
//     window.addEventListener("resize", handleUpdate);
//     window.addEventListener("focus", handleUpdate);
//     return () => {
//       window.removeEventListener("resize", handleUpdate);
//       window.removeEventListener("focus", handleUpdate);
//     };
//   }, []);

//   useEffect(() => {
//     if (error) {
//       console.error("Connection error:", error);
//       setConnectionError(error.message);
//       toast.error(<ToastMessage message={error.message} />);
//     }
//   }, [error]);

//   // Auto-connect MetaMask in-app browser
//   useEffect(() => {
//     if (isMetaMaskBrowser && onOpen && !isConnecting) {
//       console.log("Auto-connecting MetaMask in-app browser");
//       handleMetaMaskInjected();
//     }
//   }, [onOpen, isMetaMaskBrowser, isConnecting]);

//   // Environment variable validation
//   const validateEnvironment = () => {
//     if (!clientId) {
//       throw new Error("ThirdWeb Client ID is not configured. Please check your environment variables.");
//     }
//       // if (!walletConnectProjectId) {
//       //   throw new Error("WalletConnect Project ID is not configured. Please check your environment variables.");
//       // }
//   };

//   const connectViaWalletConnect = async () => {
//     try {
//       console.log("Attempting WalletConnect connection...");
//       setConnectionError(null);
//       validateEnvironment();
      
//       const wallet = createWallet("walletConnect");
//       const connectedWallet = await connect(async () => {
//         await wallet.connect({
//           clientId,
//           walletConnect: {
//             // projectId: walletConnectProjectId,
//             metadata: {
//               name: "Spice N Bites",
//               description: "Connect your wallet to Spice N Bites",
//               url: window.location.origin,
//               icons: [`${window.location.origin}/favicon.ico`],
//             },
//             showQrModal: true,
//             qrModalOptions: {
//               themeMode: "light",
//               themeVariables: { "--wcm-z-index": "2000" },
//             },
//           },
//         });
//         return wallet;
//       });
      
//       console.log("WalletConnect connected successfully");
//       toast.success(<ToastMessage message="Connected via WalletConnect!" />);
//       setOpen(false);
//       return connectedWallet;
//     } catch (err) {
//       console.error("WalletConnect error:", err);
//       const errorMessage = err?.message || "Failed to connect via WalletConnect";
//       setConnectionError(errorMessage);
//       toast.error(<ToastMessage message={errorMessage} />);
//       throw err;
//     }
//   };

//   const handleMetaMaskInjected = async () => {
//     try {
//       console.log("Attempting MetaMask injected connection...");
//       setConnectionError(null);
//       validateEnvironment();

//       // Check if MetaMask is actually available
//       if (!window.ethereum || !window.ethereum.isMetaMask) {
//         throw new Error("MetaMask is not installed or not available");
//       }
      
//       const wallet = createWallet("io.metamask");
//       const connectedWallet = await connect(async () => {
//         await wallet.connect({ clientId });
//         return wallet;
//       });
      
//       console.log("MetaMask connected successfully");
//       toast.success(<ToastMessage message="Connected to MetaMask!" />);
//       setOpen(false);
//       return connectedWallet;
//     } catch (err) {
//       console.error("MetaMask error:", err);
//       let errorMessage = err?.message || "Failed to connect to MetaMask";
      
//       // Provide more specific error messages
//       if (errorMessage.includes("User rejected")) {
//         errorMessage = "Connection cancelled by user";
//       } else if (errorMessage.includes("not installed")) {
//         errorMessage = "MetaMask is not installed. Please install MetaMask extension.";
//       }
      
//       setConnectionError(errorMessage);
//       toast.error(<ToastMessage message={errorMessage} />);
//       throw err;
//     }
//   };

//   const handleCoinbaseWallet = async () => {
//     try {
//       console.log("Attempting Coinbase Wallet connection...");
//       setConnectionError(null);
//       validateEnvironment();
      
//       const wallet = createWallet("com.coinbase.wallet");
//       const connectedWallet = await connect(async () => {
//         await wallet.connect({ clientId });
//         return wallet;
//       });
      
//       console.log("Coinbase Wallet connected successfully");
//       toast.success(<ToastMessage message="Connected to Coinbase Wallet!" />);
//       setOpen(false);
//       return connectedWallet;
//     } catch (err) {
//       console.error("Coinbase Wallet error:", err);
//       const errorMessage = err?.message || "Failed to connect to Coinbase Wallet";
//       setConnectionError(errorMessage);
//       toast.error(<ToastMessage message={errorMessage} />);
//       throw err;
//     }
//   };

//   const handleMetaMaskMobileDeepLink = () => {
//     try {
//       console.log("Opening MetaMask mobile deep link...");
//       // DEEP LINK: Opens MetaMask App with dapp loaded, per MetaMask docs
//       const siteUrl = window.location.host + window.location.pathname + window.location.search;
//       const deepLink = `metamask://dapp/${siteUrl}`;
//       const fallBack = `https://metamask.app.link/dapp/${window.location.host}${window.location.pathname}`;

//       console.log("deepLink", deepLink);
//       console.log("fallBack", fallBack);  
//       console.log("siteUrl", siteUrl);
      
//       // Show instructions for user
//       toast.info(
//         <ToastMessage message="Opening MetaMask app. Complete the connection there. If nothing happens, open the site in your MetaMask app's browser." />,
//       );
      
//       window.location.href = deepLink;
      
//       // Fallback after 1.5s for iOS/Android if nothing happens
//       setTimeout(() => {
//         window.open(fallBack, "_blank");
//       }, 150);
//     } catch (err) {
//       console.error("Deep link error:", err);
//       toast.error(<ToastMessage message="Failed to open MetaMask app" />);
//     }
//   };

//   // Choose Modal Content Dynamically
//   const renderWalletOptions = () => {
//     // Mobile (NOT in MetaMask app browser): Show ONLY WalletConnect, and deep link option as secondary
//     if (isMobile && !isMetaMaskBrowser) {
//       return (
//         <>
//           <button
//             onClick={connectViaWalletConnect}
//             className={styles.walletButton}
//             disabled={isConnecting}
//           >
//             <span>
//               WalletConnect
//               <br />
//               <small style={{ color: "#888", fontSize: "12px" }}>
//                 Recommended for MetaMask, Trust, Rainbow, etc.
//               </small>
//             </span>
//             <img
//               src={IMAGES.WALLETCONNECT_ICON || "/walletconnect-icon.svg"}
//               alt="WalletConnect"
//             />
//           </button>
//           <div style={{ margin: "16px 0 0 0", textAlign: "center" }}>
//             <strong>MetaMask User?</strong>
//             <br />
//             <button
//               onClick={handleMetaMaskMobileDeepLink}
//               disabled={isConnecting}
//               style={{
//                 marginTop: "8px",
//                 background: "#fff",
//                 color: "#f6851b",
//                 border: "1px solid #f6851b",
//                 borderRadius: "4px",
//                 padding: "8px 18px",
//                 fontWeight: 500,
//                 cursor: "pointer",
//                 fontSize: "14px",
//                 opacity: isConnecting ? 0.6 : 1,
//               }}
//             >
//               Open in MetaMask App
//             </button>
//             <div
//               style={{
//                 fontSize: "12px",
//                 opacity: 0.7,
//                 marginTop: "6px",
//                 lineHeight: "1.5",
//               }}
//             >
//               This will load your dApp inside MetaMask's browser. To connect
//               normally, use WalletConnect.
//             </div>
//           </div>
//         </>
//       );
//     }
    
//     // Desktop or MetaMask browser - show all options
//     return (
//       <>
//         <button
//           onClick={handleMetaMaskInjected}
//           className={styles.walletButton}
//           disabled={isConnecting}
//         >
//           <span>MetaMask</span>
//           <img src={IMAGES.METAMASK_ICON} alt="MetaMask" />
//         </button>
//         <button
//           onClick={connectViaWalletConnect}
//           className={styles.walletButton}
//           disabled={isConnecting}
//         >
//           <span>WalletConnect</span>
//           <img
//             src={IMAGES.WALLETCONNECT_ICON || "/walletconnect-icon.svg"}
//             alt="WalletConnect"
//           />
//         </button>
//         <button
//           onClick={handleCoinbaseWallet}
//           className={styles.walletButton}
//           disabled={isConnecting}
//         >
//           <span>Coinbase Wallet</span>
//           <img src={IMAGES.COINBASE_ICON} alt="Coinbase Wallet" />
//         </button>
//       </>
//     );
//   };

//   return (
//     <ModalComponent modalOpen={onOpen} title={<Title />} footer={<Footer />}>
//       <div className={styles.buttonContainer}>
//         {isConnecting ? (
//           <div className={styles.spinnerContainer}>
//             <Spin
//               indicator={
//                 <LoadingOutlined
//                   spin
//                   style={{ color: "#7A28FF", fontSize: 24 }}
//                 />
//               }
//               size="large"
//             />
//             <p className={styles.loadingText}>Connecting...</p>
//           </div>
//         ) : (
//           renderWalletOptions()
//         )}
//         {connectionError && (
//           <div className={styles.errorMessage}>
//             <p>{connectionError}</p>
//             <button
//               onClick={() => setConnectionError(null)}
//               style={{
//                 marginTop: "8px",
//                 padding: "6px 12px",
//                 background: "transparent",
//                 border: "1px solid #ccc",
//                 borderRadius: "4px",
//                 cursor: "pointer",
//                 fontSize: "12px",
//               }}
//             >
//               Dismiss
//             </button>
//           </div>
//         )}
//       </div>
//     </ModalComponent>
//   );
// };

// export default ConnectModal;