import React, { useState, useRef, useEffect } from "react";
import styles from "./styles.module.scss";
import { IMAGES } from "../../constants/assets";
import { Address, ConnectButton } from "@ant-design/web3";
import { WagmiWeb3ConfigProvider } from "@ant-design/web3-wagmi";
import { polygon, polygonAmoy } from "wagmi/chains";
import {
  useBalance,
  useDisconnect,
  useConnect,
  useAccount,
  useChainId,
  http,
  createConfig,
} from "wagmi";
import { injected, metaMask, coinbaseWallet } from "wagmi/connectors";
import ModalComponent from "../modal";
import ConnectModal from "../connectModal";

const Header = ({ setIsLoggedIn }) => {
  
  const config = createConfig({
    chains: [polygon, polygonAmoy],
    connectors: [metaMask(), coinbaseWallet()],
    transports: {
      [polygonAmoy.id]: http(),
      [polygon.id]: http(),
    },
  });
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDisconnect = () => {
    setShowConfirmModal(true);
    setIsDropdownOpen(false);
  };
  const closeModal = () => {
    setShowConfirmModal(false);
  };

  const confirmDisconnect = async () => {
    setLoading(true);
    try {
      await disconnect();
    } catch (error) {
      console.error("Error disconnecting:", error);
    } finally {
      setLoading(false);
      window.location.reload();
    }
    setShowConfirmModal(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const dropdownRef = useRef(null);

  const { data: balance, isError, error } = useBalance({ address });

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
    console.error("Balance Fetch Error:", isError, error);
  }

  return (
    <>
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
              {/* <ConnectModal disconnect={disconnect} /> */}
            </div>
          </div>
        </div>
        {showConfirmModal && (
          <ModalComponent
            modalOpen={showConfirmModal}
            isCreateGroup={false}
            isJoinGroup={false}
            onConfirm={confirmDisconnect}
            onCancel={closeModal}
            closeIcon={true}
            loading={loading}
          >
            <div>
              {" "}
              <h3>Confirm Disconnect</h3>
              <p>Are you sure you want to disconnect your wallet?</p>
            </div>
          </ModalComponent>
        )}
      </header>
    </>
  );
};

export default Header;
