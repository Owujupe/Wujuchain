import React from "react";
import styles from "./styles.module.scss";
import { IMAGES } from "../../constants/assets";
import Balance from "../../components/balance";
import CashFlow from "../../components/cashFlow";
import Table from "../../components/table";

const GroupDetails = () => {
  return (
    <div className={styles.groups}>
      <div className={styles.titleContainer}>
        <span className={styles.title}>Group Details</span>{" "}
        <img src={IMAGES.EDIT_ICON} alt="edit" />
      </div>

      <Balance />
      <CashFlow />
      <Table />
    </div>
  );
};

export default GroupDetails;
