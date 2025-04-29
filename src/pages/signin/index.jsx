import React from "react";
import styles from "./styles.module.scss";
import { IMAGES } from "../../constants/assets";


const SignIn = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.logo}>
          <img src={IMAGES.WUJUCHAIN_ICON} alt="logo" />
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
                <span className={styles.title}>WujuChain</span>
                <p className={styles.description}>
                A platform that transforms how people access financial resources 
                on-chain thereby promoting financial inclusion
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
                <span className={styles.title}>WujuPay</span>
                <p className={styles.description}>
                A platform that transforms how underserved populations 
                access financial resources(fiat) thereby promoting financial inclusion.
                </p>
              </div>
              {/* </div> */}
              <div className={styles.buttonContainer}>
                <button className={styles.joinButton}>
                  <span><a className={styles.description} href="https://wujupay.owujupe.com" target="_blank">Join With Email</a></span>
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
