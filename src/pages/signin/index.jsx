import React from "react";
import styles from "./styles.module.scss";
import { IMAGES } from "../../constants/assets";


const SignIn = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.logo}>
          <img src={IMAGES.LOGO} alt="logo" />
        </div>
        <div className={styles.signLabel}>
          <span>Sign in Options</span>
        </div>
        <div className={styles.innerContainer}>
          <div className={styles.leftContainer}>
            <div className={styles.leftSigninContainer}>
              <div className={styles.blockchainIcon}>
                <img src={IMAGES.BLOCKCHIAN_ICON} alt="blockchain" />
              </div>
              <div className={styles.labelContainer}>
                <span className={styles.title}>Pool on Blockchain</span>
                <p className={styles.description}>
                  Pooling money through blockchain allows transparent, global
                  contributions. Smart contracts ensure secure, automatic fund
                  management. This democratizes investments and fosters
                  inclusivity.
                </p>
              </div>
              <div className={styles.buttonContainer}>
                <button
                  className={styles.signButton}
                  onClick={() => setIsLoggedIn(true)}
                >
                  <span>Get Started</span>
                  <img src={IMAGES.RIGHT_ARROW} alt="right-arrow" />
                </button>{" "}
              </div>
            </div>
          </div>
          <div className={styles.rightContainer}>
            <div className={styles.rightSigninContainer}>
              <div className={styles.blockchainIcon}>
                <img src={IMAGES.BLOCKCHIAN_ICON} alt="blockchain" />
              </div>
              {/* <div> */}
              <div className={styles.labelContainer}>
                <span className={styles.title}>Sign in With Email</span>
                <p className={styles.description}>
                  Join our platform today and experience a revolution in
                  transparent, secure, and inclusive investing.
                </p>
              </div>
              {/* </div> */}
              <div className={styles.buttonContainer}>
                <button className={styles.joinButton}>
                  <span>Join With Email</span>
                  <img src={IMAGES.RIGHT_ARROW} alt="right-arrow" />
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
