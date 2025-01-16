import React from "react";
import styles from "./styles.module.scss";
import { IMAGES } from "../../constants/assets";
import GroupForm from "../../components/groupForm";
import { useNavigate } from "react-router-dom";

const CreateGroup = () => {
  const navigate = useNavigate(); 
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <button className={styles.backButton}  onClick={() => navigate(-1)} >
          <img src={IMAGES.BACK_ARROW} alt="back" />
          <span>Back</span>
        </button>
      </div>
      <div className={styles.rightSection}>
        <p className={styles.title}>Start with a group name and description</p>
        <GroupForm />
      </div>
      
    </div>
  );
};

export default CreateGroup;
