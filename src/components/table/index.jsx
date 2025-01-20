import React from "react";
import styles from "./styles.module.scss";
import { IMAGES } from "../../constants/assets";

const Table = () => {
  const StatusBadge = ({ status }) => {
    const statusClasses = {
      paid: styles.statusPaid,
      unpaid: styles.statusUnpaid,
      next: styles.statusNext,
    };

    return (
      <span className={`${styles.statusBadge} ${statusClasses[status]}`}>
        {status}
      </span>
    );
  };
  return (
    <div className={styles.tableSection}>
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search..."
          className={styles.searchInput}
        />
        <img src={IMAGES.FUNNEL_ICON} alt="search" />
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Wallet</th>
            <th>Payment Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>46578903394857390239</td>
            <td>23 August, 2024</td>
            <td>
              <StatusBadge status="paid" />
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>46578903394857390239</td>
            <td>23 August, 2024</td>
            <td>
              <StatusBadge status="unpaid" />
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>46578903394857390239</td>
            <td>23 August, 2024</td>
            <td>
              <StatusBadge status="next" />
            </td>
          </tr>

          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
