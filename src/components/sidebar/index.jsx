import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import { IMAGES } from "../../constants/assets";
import { ROUTES } from "../../router/routes";
import { NAV_ITEMS, BOTTOM_NAV_ITEMS } from "../../constants";
const Sidebar = ({ routeName }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.sidebar}>
      {/* Logo Section */}
      <div
        className={styles.logoSection}
        onClick={() => {
          navigate(ROUTES.APP);
        }}
      >
        <img src={IMAGES.WUJUCHAIN_ICON} alt="Logo" />
      </div>

      {/* Main Navigation */}
      <div className={styles.mainNav}>
        {NAV_ITEMS.map(({ name, route, image, activeImage }) => (
          <button
            key={`main-${route}`}
            className={`${styles.button} ${
              routeName === route ? styles.active : ""
            }`}
            onClick={() => {
              navigate(route);
            }}
          >
            <img src={routeName === route ? activeImage : image} alt={name} />
            <span
              className={`${routeName === route ? styles.activeButton : ""}`}
            >
              {name}
            </span>
          </button>
        ))}
      </div>

      {/* Bottom Navigation Section (Settings) */}
      <div className={styles.bottomSection}>
        {BOTTOM_NAV_ITEMS.map(({ name, route, image, activeImage }) => (
          <button
            key={`bottom-${route}`}
            className={`${styles.button} ${
              routeName === route ? styles.active : ""
            }`}
            onClick={() => {
              navigate(route);
            }}
          >
            <img src={routeName === route ? activeImage : image} alt={name} />
            <span
              className={`${routeName === route ? styles.activeButton : ""}`}
            >
              {name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
