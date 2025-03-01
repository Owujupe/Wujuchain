import React from "react";
import { Button, Modal, Spin } from "antd";
import styles from "./styles.module.scss";
import dayjs from "dayjs";
import { LoadingOutlined } from "@ant-design/icons";

const ModalComponent = ({
  modalOpen,
  onCancel,
  onConfirm,
  title,
  data,
  isCreateGroup,
  isJoinGroup,
  loading,
  confirmButtonText,
  cancelButtonText,
  children,
  closeIcon = false,
  footer
}) => {
  const Title = () => {
    return <p className={styles.modalTitle}>{title}</p>;
  };
  const Footer = () => {
    return (
      <div className={styles.modalFooter}>
        {onConfirm && (
          <Button
            className={
              loading
                ? styles.modalConfirmButtonLoading
                : styles.modalConfirmButton
            }
            onClick={onConfirm}
          >
            {loading && (
              <span>
                <Spin
                  indicator={
                    <LoadingOutlined spin style={{ color: "#7A28FF" }} />
                  }
                  size="small"
                  style={{ marginRight: "10px", width: "10px" }}
                />{" "}
              </span>
            )}
            {confirmButtonText ? confirmButtonText : "Confirm"}
          </Button>
        )}
        {onCancel && (
          <Button className={styles.modalCancelButton} onClick={onCancel}>
            {cancelButtonText ? cancelButtonText : "Cancel"}
          </Button>
        )}
      </div>
    );
  };
  const startDate = dayjs(data?.startDate, "MM/DD/YYYY").format("D MMMM, YYYY");
  return (
    <Modal
      title={<Title />}
      centered
      open={modalOpen}
      onOk={onConfirm}
      onCancel={onCancel}
      width={400}
      closeIcon={closeIcon}
      footer={footer ? footer : <Footer />}
      maskClosable={false}
    >
      {isCreateGroup && (
        <div>
          <p className={styles.modalContent}>
            <span className={styles.modalLabel}>Group Name</span>
            <span className={styles.modalBoldValue}>{data?.groupName} </span>
          </p>
          <p className={styles.modalContent}>
            <span className={styles.modalLabel}>Group Purpose</span>
            <span className={styles.modalValue}>{data?.groupPurpose}</span>
          </p>
          <p className={styles.modalContent}>
            <span className={styles.modalLabel}>Start Date</span>
            <span className={styles.modalValue}>{startDate}</span>
          </p>
          <p className={styles.modalAmountContet}>
            <div className={styles.modalAmount}>
              <span className={styles.modalLabel}>Amount to contribute</span>
              <span className={styles.modalBoldValue}>
                {data?.amount ? `USDT ${data?.amount}` : ""}
              </span>
            </div>
            <div>
              <span className={styles.modalAmountFrequency}>
                {data?.frequency}
              </span>
            </div>
          </p>{" "}
          <p className={styles.modalContent}>
            <span className={styles.modalLabel}>Group Size</span>
            <span className={styles.modalValue}>{data?.groupSize}</span>
          </p>
        </div>
      )}
      {isJoinGroup && (
        <div className={styles.joinGroupContainer}>
          {" "}
          <div className={styles.groupDetailsContainer}>
            <img src={data?.icon} alt="group" />
            <p className={styles.groupDetails}>
              <span className={styles.groupNameText}>{data?.groupName}</span>
              <span className={styles.groupPurposeText}>
                {data?.groupPurpose}
              </span>
            </p>
          </div>
          <p className={styles.modalAmountContet}>
            <div className={styles.modalAmount}>
              <span className={styles.modalLabel}>Amount to contribute</span>
              <span className={styles.modalBoldValue}>
                {data?.amount ? `USDT ${data?.amount}` : ""}
              </span>
            </div>
            <div>
              <span className={styles.modalAmountFrequency}>
                {data?.frequency}
              </span>
            </div>
          </p>{" "}
        </div>
      )}
      {!isCreateGroup && !isJoinGroup && <div>{children}</div>}
    </Modal>
  );
};

export default ModalComponent;
