import React from "react";
import styles from "./styles.module.scss";

const Balance = ({campaignAddress, groupSize, groupCount, goal, cycle, contractBalance}) => {
  
  return (
    <section className={styles.boxSection}>
      <div className={styles.box}>
        <div className={styles.boxContent}>
          <h2>Cycle Goal</h2>
          <span className={styles.description}>
            <p className={styles.descriptionText}>{String(goal*groupSize)}</p>
            <p className={styles.cornerText}>USDT</p>
          </span>
        </div>
      </div>

      <div className={styles.box}>
        <div className={styles.boxContent}>
          <h2>Current Balance</h2>
          <span className={styles.description}>
            <p className={styles.descriptionText}>${String(contractBalance)} </p>
            <p className={styles.cornerText}>USDC</p>
          </span>
        </div>
      </div>

      <div className={styles.box}>
        <div className={styles.boxContent}>
          <h2>Members</h2>
          <span className={styles.description}>
            <p className={styles.descriptionText}>{String(groupCount)}/{String(groupSize)}</p>
            <p className={styles.cornerText}>{""}</p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Balance;
