import React from "react";
import styles from "./styles.module.scss";
import { IMAGES } from "../../constants/assets";
import Balance from "../../components/balance";
import CashFlow from "../../components/cashFlow";
import Table from "../../components/table";
import { useLocation } from 'react-router-dom';
import { client } from "../../client";
import { getContract } from "thirdweb";
import { polygonAmoy } from "thirdweb/chains";
import { useReadContract } from "thirdweb/react";


const GroupDetails = () => {
  const location = useLocation();
  const linkData = location.state;
  const campaignaddress = linkData?.groupContractAddress
  console.log(campaignaddress)
  const contract = getContract({
    client: client,
    chain: polygonAmoy,
    address: linkData?.groupContractAddress,
  });
  const { data: groupcode } = useReadContract({
    contract,
    method: "function groupcode() view returns (string)",
    params: [],
  });
  const { data: groupname } = useReadContract({
    contract,
    method: "function groupname() view returns (string)",
    params: [],
  });
  const { data: description } = useReadContract({
    contract,
    method: "function description() view returns (string)",
    params: [],
  });
  const { data: goal } = useReadContract({
    contract,
    method: "function goal() view returns (uint256)",
    params: [],
  });
  const { data: groupsize } = useReadContract({
    contract,
    method: "function groupSize() view returns (uint256)",
    params: [],
  });
  const { data: memberCount } = useReadContract({
    contract,
    method: "function memberCount() view returns (uint256)",
    params: [],
});
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

      <Balance campaignAddress={campaignaddress} groupSize={groupsize} groupCount={memberCount} />
      <CashFlow />
      <Table headers={firstTableHeaders} data={firstTableData}  />
    </div>
  );
};

export default GroupDetails;
