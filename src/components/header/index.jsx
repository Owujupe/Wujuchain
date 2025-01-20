import React, { useState } from "react";
import styles from "./styles.module.scss";
import { IMAGES } from "../../constants/assets";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
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
          {/* <span className={styles.badge}>3</span> */}
        </div>

        <div className={styles.profileSection}>
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

              <span className={styles.address}>0xDGEHSTU...GHD</span>
              <img src={IMAGES.COPY_ICON} alt="Copy" />
            </div>
            <div className={styles.dropdownItem}>
              <div className={styles.walletBalance}>
                <p>Wallet Balance</p>
                <span>0.0026USDT</span>
              </div>
            </div>
            <div className={styles.dropdownDivider} />
            <div className={styles.dropdownItem}>
              <img src={IMAGES.HELP_ICON} alt="Help" />
              <span>Help</span>
            </div>
            <div className={styles.dropdownItem}>
              <img src={IMAGES.LOGOUT_ICON} alt="Logout" />
              <span>Disconnect</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
