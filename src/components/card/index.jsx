import React from "react";
import styles from "./styles.module.scss";

const Card = ({ title, description, subDesc }) => {
  return (
    <div>
      {" "}
      <div className={styles.box}>
        <div className={styles.boxContent}>
          <h2>{title}</h2>
          <span className={styles.description}>
            <p className={styles.descriptionText}>{description}</p>
            <p className={styles.cornerText}>{subDesc}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
