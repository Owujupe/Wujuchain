import React, { useState } from "react";
import styles from "./styles.module.scss";
import { IMAGES } from "../../constants/assets";
import { useNavigate } from "react-router-dom";
import { Input } from "antd";
import dayjs from "dayjs";
import ModalComponent from "../../components/modal";
import { toast } from "react-toastify";
import ToastMessage from "../../components/toast";

const JoinGroup = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectDateModal, setSelectDateModal] = useState(false);
  const [showDateDropdown, setShowDateDropdown] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [groupCode, setGroupCode] = useState("");

  const groupData = {
    icon: IMAGES.SHS_GROUP,
    groupName: "SHS 21",
    groupPurpose:
      "We are a group of commited individuals trying to raise money for our schools fees",
    startDate: "01/23/2025",
    amount: "150",
    frequency: "Bi-Weekly",
    groupSize: "7",
  };
  const onSubmit = () => {
    if (groupCode === "SHS 21") {
      setModalOpen(true);
    } else {
      toast.error(
        <ToastMessage isError={true} message="Code does not exist" />
      );
    }
  };
  const onConfirm = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setModalOpen(false);
      setSelectDateModal(true);
    }, 2000);
  };
  const onConfirmSelectDate = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSelectDateModal(false);
      setGroupCode("");
    }, 2000);
  };
  const availableDates = [
    "01/23/2025",
    "01/24/2025",
    "01/25/2025",
    "01/26/2025",
    "01/27/2025",
  ];
  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setShowDateDropdown(false);
  };

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
          <Input
            placeholder="Group Code"
            className={styles.input}
            value={groupCode}
            onChange={(e) => setGroupCode(e.target.value)}
          />
          <div className={styles.buttonContainer}>
            <button onClick={onSubmit}>
              Continue <img src={IMAGES.RIGHT_ARROW} alt="arrow" />
            </button>{" "}
          </div>
        </div>
      </div>
      <ModalComponent
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        onConfirm={onConfirm}
        isCreateGroup={false}
        isJoinGroup={true}
        loading={loading}
        confirmButtonText="Join Group"
        data={groupData}
      />
      <ModalComponent
        modalOpen={selectDateModal}
        setModalOpen={setSelectDateModal}
        onConfirm={!showDateDropdown ? onConfirmSelectDate : null}
        confirmButtonText={!showDateDropdown ? "Proceed" : ""}
        title={!showDateDropdown ? "Select Payment Date" : ""}
        loading={loading}
      >
        <div className={styles.selectDateContainer}>
          <div
            className={styles.selectDate}
            onClick={() => setShowDateDropdown(!showDateDropdown)}
            style={showDateDropdown ? { display: "none" } : {}}
          >
            <span>
              {selectedDate
                ? dayjs(selectedDate, "MM/DD/YYYY").format("D MMMM, YYYY")
                : "Choose"}
            </span>
            <img src={IMAGES.CARET_DOWN} alt="down" />
          </div>
          {showDateDropdown && (
            <div className={styles.dateDropdown}>
              <p className={styles.dateDropdownTitle}>Available Dates</p>
              {availableDates.map((date, index) => (
                <div
                  key={index}
                  className={styles.dateOption}
                  onClick={() => handleDateSelect(date)}
                >
                  {dayjs(date, "MM/DD/YYYY").format("D MMMM, YYYY")}
                </div>
              ))}
            </div>
          )}
        </div>
      </ModalComponent>
    </div>
  );
};

export default JoinGroup;
