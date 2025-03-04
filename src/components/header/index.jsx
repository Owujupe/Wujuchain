import React, { useState, useRef, useEffect } from "react";
import styles from "./styles.module.scss";
import { IMAGES } from "../../constants/assets";
import { polygonAmoy } from "thirdweb/chains";
import ModalComponent from "../modal";
import {
  useActiveAccount,
  useDisconnect,
  useActiveWallet,
  useWalletBalance,
} from "thirdweb/react";
import { clientId } from "../../constants";
import { Address } from "@ant-design/web3";

import { ethereum } from "thirdweb/chains";
import { createThirdwebClient } from "thirdweb";
import { toast } from "react-toastify";
import ToastMessage from "../toast";

const Header = ({ setIsLoggedIn, isLoggedIn }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const client = createThirdwebClient({ clientId });
  const [loading, setLoading] = useState(false);
  const activeAccount = useActiveAccount();
  const address = activeAccount?.address;
  const { data, isFetching, error } = useWalletBalance({
    chain: polygonAmoy,
    address,
    client,
  });

  const wallet = useActiveWallet();

  const { disconnect } = useDisconnect();

  const dropdownRef = useRef(null);

  const closeModal = () => {
    setShowConfirmModal(false);
  };
  // Handle dropdown toggle
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Handle disconnect & close dropdown
  const handleDisconnect = () => {
    setShowConfirmModal(true);
  };

  const confirmDisconnect = async () => {
    try {
      await disconnect(wallet); // Disconnect the wallet
      setShowConfirmModal(false);
      toast.success(<ToastMessage message={"Disconnected Successfully "} />);
    } catch (error) {
      console.error("Error disconnecting wallet:", error);
    }
  };

  // Close dropdown on outside click
  useEffect(() => {
    if (!showConfirmModal) {
      const handleClickOutside = (event) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target)
        ) {
          setIsDropdownOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [showConfirmModal]);

  const copyToClipboard = () => {
    if (address) {
      navigator.clipboard.writeText(address);
      toast.success(<ToastMessage message={"Address copied"} />);
    } else {
    }
  };

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
                <img
                  src={IMAGES.COPY_ICON}
                  alt="Copy"
                  onClick={copyToClipboard}
                />
              </div>
              <div className={styles.dropdownItem}>
                <div className={styles.walletBalance}>
                  <p>Wallet Balance</p>
                  <span>
                    {isFetching
                      ? "Fetching . . . "
                      : `${data?.displayValue} ${data?.symbol}`}
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
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
