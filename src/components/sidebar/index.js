import React from "react";
import styles from "./styles.module.scss";
import { IMAGES } from "../../constants/assets";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      {/* Logo Section */}
      <div className={styles.logoSection}>
        <img src={IMAGES.LOGO} alt="Logo" />
      </div>

      {/* Main Navigation */}
      <div className={styles.mainNav}>
        <button className={styles.button}>
          <img src={IMAGES.DASHBOARD} alt="Dashboard" />
          <span>Dashboard</span>
        </button>
        <button className={styles.button}>
          <img src={IMAGES.GROUPS} alt="Groups" />
          <span>Groups</span>
        </button>
      </div>

      {/* Bottom Buttons */}
      <div className={styles.bottomSection}>
        <button className={styles.button}>
          <img src={IMAGES.SETTINGS} alt="Settings" />
          <span>Settings</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
