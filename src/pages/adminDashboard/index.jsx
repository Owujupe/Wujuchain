import React from "react";
import styles from "./styles.module.scss";
import Card from "../../components/card";
import Table from "../../components/table";

const AdminDashboard = () => {
  const secondTableHeaders = [
    "Group",
    "Amount",
    "Creator",
    "Frequency",
    "Members",
  ];
  const secondTableData = [
    {
      Group: "Group A",
      Amount: "50 USDT",
      Creator: "John Doe",
      Frequency: "Monthly",
      Members: "10 Persons" ,
    },
    {
      Group: "Group B",
      Amount: "50 USDT",
      Creator: "Jane Smith",
      Frequency: "Weekly",
      Members: "5 Persons",
    },
    {
      Group: "Group C",
      Amount: "10 USDT",
      Creator: "Alice Johnson",
      Frequency: "Bi-weekly",
      Members: "8 persons",
    },
  ];
  const handleActionClick = (row) => {
    console.log("Action clicked for row:", row);
  };
  return (
    <div className={styles.dashboard}>
      <div className={styles.titleContainer}>
        <span className={styles.title}>Admin Dashboard</span>{" "}
      </div>
      <div className={styles.groupsDetails}>
        <Card title={"Total Members"} description={"560K"} />
        <Card title={"Members"} description={"1.655M"} />
      </div>
      <Table
        headers={secondTableHeaders}
        data={secondTableData}
        actionButton={{ label: "Action", onClick: handleActionClick }}
      />
    </div>
  );
};

export default AdminDashboard;
