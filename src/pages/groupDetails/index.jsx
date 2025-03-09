import React from "react";
import styles from "./styles.module.scss";
import { IMAGES } from "../../constants/assets";
import Balance from "../../components/balance";
import CashFlow from "../../components/cashFlow";
import Table from "../../components/table";
import { useLocation } from 'react-router-dom';

const GroupDetails = () => {
  const location = useLocation();
  const linkData = location.state;
  const campaignaddress = linkData?.groupContractAddress
  console.log(campaignaddress)
  const firstTableHeaders = ["S/N", "Wallet", "Payment Date", "Status"];
const firstTableData = [
  { "S/N": 1, Wallet: "46578903394857390239", "Payment Date": "23 August, 2024", Status: "paid" },
  { "S/N": 2, Wallet: "46578903394857390239", "Payment Date": "23 August, 2024", Status: "unpaid" },
  { "S/N": 3, Wallet: "46578903394857390239", "Payment Date": "23 August, 2024", Status: "next" },
];
  return (
    <div className={styles.groups}>
      <div className={styles.titleContainer}>
        <span className={styles.title}>Group Details</span>{" "}
        <img src={IMAGES.EDIT_ICON} alt="edit" />
      </div>

      <Balance />
      <CashFlow />
      <Table headers={firstTableHeaders} data={firstTableData}  />
    </div>
  );
};

export default GroupDetails;
