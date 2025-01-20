import React from "react";
import styles from "./styles.module.scss";

const Balance = () => {
  return (
    <section className={styles.boxSection}>
      <div className={styles.box}>
        <div className={styles.boxContent}>
          <h2>Total Paid Out</h2>
          <span className={styles.description}>
            <p className={styles.descriptionText}>{"$3340.00"}</p>
            <p className={styles.cornerText}>USDT</p>
          </span>
        </div>
      </div>

      <div className={styles.box}>
        <div className={styles.boxContent}>
          <h2>Total Pooled</h2>
          <span className={styles.description}>
            <p className={styles.descriptionText}>{"$1,3340.00"}</p>
            <p className={styles.cornerText}>USDT</p>
          </span>
        </div>
      </div>

      <div className={styles.box}>
        <div className={styles.boxContent}>
          <h2>Members</h2>
          <span className={styles.description}>
            <p className={styles.descriptionText}>10</p>
            <p className={styles.cornerText}>{""}</p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Balance;
