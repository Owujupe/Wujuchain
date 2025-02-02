import React, { useState, useRef, useEffect } from "react";
import styles from "./styles.module.scss";
import { IMAGES } from "../../constants/assets";
import { Address, useConnection } from "@ant-design/web3";
// import { useAccount, useBalance, useDisconnect } from "wagmi";
import { Sepolia, WagmiWeb3ConfigProvider } from "@ant-design/web3-wagmi";
import { baseSepolia, mintSepoliaTestnet, sepolia } from "wagmi/chains";
import {
  useBalance,
  useDisconnect,
  useConnections,
  useConnect,
  useAccount,
  useChainId,
  http,
} from "wagmi";
import { injected } from "wagmi/connectors";

const Header = () => {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDisconnect = async () => {
    try {
      await disconnect();
    } catch (error) {
      console.error("Error disconnecting:", error);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const dropdownRef = useRef(null);
  const chainId = useChainId({
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
  console.log(chainId, "gggghg", sepolia.id);
  const { data: balance,isError,error } = useBalance({ address, chainId: Sepolia.id });
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  if (isError) {
    console.error("Balance Fetch Error:", isError,error);
  }
  console.log("Address:", address);
  console.log("Chain ID:", sepolia.id);
  console.log("Is Connected:", isConnected);
  console.log("Balance:", balance);

  return (
    <WagmiWeb3ConfigProvider>
      <header className={styles.header}>
        <div className={styles.searchContainer}>
          <img src={IMAGES.SEARCH} alt="Search" />
          <input
            type="text"
            placeholder="Search"
            className={styles.searchInput}
          />
        </div>

        <div className={styles.rightSection}>
          <div className={styles.notificationIcon}>
            <img src={IMAGES.NOTIFICATION} alt="Notification" />
          </div>

          <div className={styles.profileSection} ref={dropdownRef}>
            <img
              src={IMAGES.AVATAR}
              alt="Profile"
              className={styles.profilePic}
            />
            <div className={styles.profileInfo} onClick={toggleDropdown}>
              <span className={styles.name}>Godfrey Jons</span>
              <img src={IMAGES.CARET_DOWN} alt="Caret Down" />
            </div>

            <div
              className={`${styles.dropdown} ${
                isDropdownOpen ? styles.open : ""
              }`}
            >
              <div className={styles.dropdownItem}>
                <img src={IMAGES.PROFILE_ICON} alt="Profile" />

                <Address
                  className={styles.address}
                  ellipsis
                  address={address}
                  tooltip={false}
                />
                <img src={IMAGES.COPY_ICON} alt="Copy" />
              </div>
              <div className={styles.dropdownItem}>
                <div className={styles.walletBalance}>
                  <p>Wallet Balance</p>
                  <span>
                    {balance?.formatted} {balance?.symbol}
                  </span>
                </div>
              </div>
              <div className={styles.dropdownDivider} />
              <div className={styles.dropdownItem}>
                <img src={IMAGES.HELP_ICON} alt="Help" />
                <span>Help</span>
              </div>
              <div className={styles.dropdownItem} onClick={handleDisconnect}>
                <img src={IMAGES.LOGOUT_ICON} alt="Logout" />
                <span>Disconnect</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </WagmiWeb3ConfigProvider>
  );
};

export default Header;
