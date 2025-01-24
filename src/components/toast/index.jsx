import React from "react";
import styles from "./styles.module.scss";

const ToastMessage = ({
  title,
  message,
  isError,
  isSuccess,
  isInfo,
  isWarning,
}) => {
  return (
    <div className={styles.toastMessageContainer}>
      <b>{title}</b> <br></br>
      <div
        className={`${styles.toastMessage} ${
          isError
            ? styles.error
            : isSuccess
            ? styles.success
            : isInfo
            ? styles.info
            : isWarning
            ? styles.warning
            : ""
        }`}
      >
        {message}
      </div>
    </div>
  );
};
export default ToastMessage;
