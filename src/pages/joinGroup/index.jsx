import React from "react";
import styles from "./styles.module.scss";
import { IMAGES } from "../../constants/assets";
import { useNavigate } from "react-router-dom";

import { Input } from "antd";
const JoinGroup = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <button className={styles.backButton} onClick={() => navigate(-1)}>
          <img src={IMAGES.BACK_ARROW} alt="back" />
          <span>Back</span>
        </button>
      </div>
      <div className={styles.rightSection}>
        <p className={styles.title}>Enter the group code</p>
        <div className={styles.inputContainer}>
          <Input placeholder="Group Code" className={styles.input} />
          <div className={styles.buttonContainer}>
            <button>Continue <img src={IMAGES.RIGHT_ARROW} alt="arrow" /></button>{" "}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinGroup;
