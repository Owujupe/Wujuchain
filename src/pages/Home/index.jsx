import React, { useState } from "react";
import styles from "./styles.module.scss";
import { IMAGES } from "../../constants/assets";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../router/routes";
import ConnectModal from "../../components/connectModal";

const Home = () => {
  const navigate = useNavigate();
  const [showWalletModal, setShowWalletModal] = useState(true);

  return (
    <>
      <div className={styles.homeContainer}>
        <div className={styles.leftSection}>
          <div className={styles.welcomeContainer}>
            <span>Welcome, John Doe</span>{" "}
            <img src={IMAGES.CELEBRATE_FILL} alt="Celebrate" />
          </div>
          <p>What do you have in mind?</p>
        </div>

        <div className={styles.rightSection}>
          <div
            className={styles.groupContainer}
            onClick={() => navigate(ROUTES.CREATE_GROUP)}
          >
            <h2>Create your first</h2>
            <span>
              group <img src={IMAGES.SPARKLE} alt="sparkle" />
            </span>
            <p>
              Create your debut group on Owujupe. Let's kickstart this savings
              journey together!
            </p>
          </div>

          <div
            className={styles.joinContainer}
            onClick={() => navigate(ROUTES.JOIN_GROUP)}
          >
            <h2>
              Join your first{" "}
              <span>
                group <img src={IMAGES.SPARKLE_WHITE} alt="sparkle" />
              </span>{" "}
            </h2>

            <p>
              Start saving up for rainy days. Let's kickstart this savings
              journey together!
            </p>
          </div>
        </div>
      </div>
      {showWalletModal && (
        <ConnectModal open={showWalletModal} setOpen={setShowWalletModal} />
      )}
    </>
  );
};

export default Home;
