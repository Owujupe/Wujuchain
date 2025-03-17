// import React from "react";
import styles from "./styles.module.scss";
import { IMAGES } from "../../constants/assets";
import Button from "../button";

const Table = ({ headers, data, actionButton }) => {
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
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
            {actionButton && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {headers.map((header, colIndex) => (
                <td key={colIndex}>
                  {header === "Status" ? (
                    <StatusBadge status={row[header]} />
                  ) : (
                    row[header]
                  )}
                </td>
              ))}
              {actionButton && (
                <td>
                  <Button
                    onClick={() => actionButton.onClick(row)}
                    className={styles.actionButton}
                    text={actionButton.label}
                    icon={null}
                    buttonStyle={styles.actionButton}
                  />
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
