import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import { IMAGES } from "../../constants/assets";
import { ROUTES } from "../../router/routes";

const Sidebar = () => {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <div className={styles.sidebar}>
      {/* Logo Section */}
      <div
        className={styles.logoSection}
        onClick={() => {
          navigate(ROUTES.APP);
          setActiveButton(null);
        }}
      >
        <img src={IMAGES.LOGO} alt="Logo" />
      </div>

      {/* Main Navigation */}
      <div className={styles.mainNav}>
        <button
          className={`${styles.button} ${
            activeButton === "dashboard" ? styles.active : ""
          }`}
          onClick={() => {
            handleClick("dashboard");
            navigate(ROUTES.DASHBOARD);
          }}
        >
          <img src={IMAGES.DASHBOARD} alt="Dashboard" />
          <span>Dashboard</span>
        </button>
        <button
          className={`${styles.button} ${
            activeButton === "groups" ? styles.active : ""
          }`}
          onClick={() => {
            handleClick("groups");
            navigate(ROUTES.GROUP_DETAILS);
          }}
        >
          <img src={IMAGES.GROUPS} alt="Groups" />
          <span>Groups</span>
        </button>
      </div>

      {/* Bottom Buttons */}
      <div className={styles.bottomSection}>
        <button
          className={`${styles.button} ${
            activeButton === "settings" ? styles.active : ""
          }`}
          onClick={() => {
            handleClick("settings");
            // navigate(ROUTES.SETTINGS);
          }}
        >
          <img src={IMAGES.SETTINGS} alt="Settings" />
          <span>Settings</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
