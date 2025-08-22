// import React from "react";
// import { useNavigate } from "react-router-dom";
// import styles from "./styles.module.scss";
// import { IMAGES } from "../../constants/assets";
// import { ROUTES } from "../../router/routes";
// import { NAV_ITEMS, BOTTOM_NAV_ITEMS } from "../../constants";
// const Sidebar = ({ routeName }) => {
//   const navigate = useNavigate();

//   return (
//     <div className={styles.sidebar}>
//       {/* Logo Section */}
//       <div
//         className={styles.logoSection}
//         onClick={() => {
//           navigate(ROUTES.APP);
//         }}
//       >
//         <img src={IMAGES.WUJUCHAIN_ICON} alt="Logo" />
//       </div>

//       {/* Main Navigation */}
//       <div className={styles.mainNav}>
//         {NAV_ITEMS.map(({ name, route, image, activeImage }) => (
//           <button
//             key={`main-${route}`}
//             className={`${styles.button} ${
//               routeName === route ? styles.active : ""
//             }`}
//             onClick={() => {
//               navigate(route);
//             }}
//           >
//             <img src={routeName === route ? activeImage : image} alt={name} />
//             <span
//               className={`${routeName === route ? styles.activeButton : ""}`}
//             >
//               {name}
//             </span>
//           </button>
//         ))}
//       </div>

//       {/* Bottom Navigation Section (Settings) */}
//       <div className={styles.bottomSection}>
//         {BOTTOM_NAV_ITEMS.map(({ name, route, image, activeImage }) => (
//           <button
//             key={`bottom-${route}`}
//             className={`${styles.button} ${
//               routeName === route ? styles.active : ""
//             }`}
//             onClick={() => {
//               navigate(route);
//             }}
//           >
//             <img src={routeName === route ? activeImage : image} alt={name} />
//             <span
//               className={`${routeName === route ? styles.activeButton : ""}`}
//             >
//               {name}
//             </span>
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { IMAGES } from "../../constants/assets";
import { NAV_ITEMS, BOTTOM_NAV_ITEMS } from "../../constants";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ routeName, isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  // Safety check for NAV_ITEMS and BOTTOM_NAV_ITEMS
  const safeNavItems = Array.isArray(NAV_ITEMS) ? NAV_ITEMS : [];
  const safeBottomNavItems = Array.isArray(BOTTOM_NAV_ITEMS)
    ? BOTTOM_NAV_ITEMS
    : [];

  // Ensure routeName is a string
  const safeRouteName = typeof routeName === "string" ? routeName : "";

  // Detect mobile and tablet
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close sidebar when clicking outside or pressing ESC
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event) => {
      // Check if click is outside sidebar and not on hamburger button
      const sidebar = event.target.closest(`.${styles.sidebar}`);
      const hamburger = event.target.closest(`.${styles.hamburgerButton}`);

      console.log("Click outside check:", {
        isMobile,
        hasSidebar: !!sidebar,
        hasHamburger: !!hamburger,
        target: event.target.tagName,
        targetClass: event.target.className,
      });

      // Close if clicking outside sidebar (but not on hamburger)
      if (isMobile && !sidebar && !hamburger) {
        console.log("Closing sidebar - click outside detected");
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    // Use both mousedown and click events for better compatibility
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, isMobile]);

  // Prevent body scroll when sidebar is open on mobile
  useEffect(() => {
    if (isMobile) {
      if (isOpen) {
        document.body.classList.add("sidebar-open");
      } else {
        document.body.classList.remove("sidebar-open");
      }
    }

    return () => {
      document.body.classList.remove("sidebar-open");
    };
  }, [isOpen, isMobile]);

  return (
    <>
      {/* Hamburger for tablet and mobile - sidebar closes when clicking outside */}
      {isMobile && (
        <button
          className={styles.hamburgerButton}
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      )}

      <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <div className={styles.sidebarContent}>
          {/* Logo */}
          <div className={styles.logoSection} onClick={() => navigate("/")}>
            <img src={IMAGES.WUJUCHAIN_ICON} alt="Logo" />
          </div>

          {/* Main Navigation */}
          <div className={styles.mainNav}>
            {safeNavItems.map(({ name, route, image, activeImage }, index) => (
              <button
                key={`nav-${name}-${index}`}
                className={`${styles.button} ${
                  safeRouteName === route ? styles.active : ""
                }`}
                onClick={() => {
                  if (route) {
                    navigate(route);
                    if (isMobile) setIsOpen(false); // close on tablet/mobile
                  }
                }}
              >
                <img
                  src={safeRouteName === route ? activeImage : image}
                  alt={name}
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
                <span
                  className={safeRouteName === route ? styles.activeButton : ""}
                >
                  {name}
                </span>
              </button>
            ))}
          </div>

          {/* Bottom Navigation */}
          <div className={styles.bottomSection}>
            {safeBottomNavItems.map(
              ({ name, route, image, activeImage }, index) => (
                <button
                  key={`bottom-${name}-${index}`}
                  className={`${styles.button} ${
                    safeRouteName === route ? styles.active : ""
                  }`}
                  onClick={() => {
                    if (route) {
                      navigate(route);
                      if (isMobile) setIsOpen(false); // close on tablet/mobile
                    }
                  }}
                >
                  <img
                    src={safeRouteName === route ? activeImage : image}
                    alt={name}
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                  <span
                    className={
                      safeRouteName === route ? styles.activeButton : ""
                    }
                  >
                    {name}
                  </span>
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
