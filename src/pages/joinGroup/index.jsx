import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { IMAGES } from "../../constants/assets";
import { useNavigate } from "react-router-dom";
import { Input } from "antd";
import dayjs from "dayjs";
import ModalComponent from "../../components/modal";
import { toast } from "react-toastify";
import ToastMessage from "../../components/toast";
import { getContract, prepareContractCall, prepareEvent, watchContractEvents } from "thirdweb";
import { useLocation } from 'react-router-dom';
import { polygonAmoy } from "thirdweb/chains";
import { CROWDFUNDING_FACTORY } from "../../constants/address";
import { useReadContract, useSendTransaction } from "thirdweb/react"
import { client } from "../../client";


const JoinGroup = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectDateModal, setSelectDateModal] = useState(false);
  const [showDateDropdown, setShowDateDropdown] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [groupCode, setGroupCode] = useState("");
  const location = useLocation();
  const linkData = location.state;
  const [event, setevent] = useState(false);
  //console.log("Joining Address", linkData?.groupContractAddress);
  //For Testing Only
  const campaignaddress = linkData?.groupContractAddress
  const contract = getContract({
    client: client,
    chain: polygonAmoy,
    address: linkData?.groupContractAddress,
  });
  const fundingcontract = getContract({
    client: client,
    chain: polygonAmoy,
    address: CROWDFUNDING_FACTORY,
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
  const frequency = {86400:"Daily", 604800: "Bi-weekly", 2592000: "Monthly"}
  const { data: period } = useReadContract({
    contract,
    method: "function period() view returns (uint256)",
    params: [],
  });
  ////////////////////////////////////////////////////////////
  const groupData = {
    icon: IMAGES.SHS_GROUP,
    groupName: groupname,
    groupPurpose: description,
    startDate: "01/23/2025",
    amount: goal,
    frequency: frequency[period],
    groupSize: groupsize,
  };
  const onSubmit = () => {
    if (groupCode === groupcode) {
      setModalOpen(true);
    } else {
      toast.error(
        <ToastMessage isError={true} message="Code does not exist" />
      );
    }
  };
  //thirdWeb
  const preparedEvent = prepareEvent({
    signature:
      "event MemberAdded(address indexed newMember, address indexed campaignAddress)",
  });
  const events = watchContractEvents({
    contract: fundingcontract,
    events: [preparedEvent],
    onEvents: (events) => {
      console.log(events)
      setevent(events)
    },
    });
  useEffect(() => {
    if (event) {
      console.log("Successfully added to Group", event[0])
      alert(`Successfully Added to: ${event[0]['args']["campaignAddress"]}\nTransaction Hash: ${event[0]["transactionHash"]}`);
      setLoading(false);
      setModalOpen(false);
      setSelectDateModal(true);
    }
  }, [event]);
  const { mutate: sendTransaction } = useSendTransaction();
  const onConfirm = () => {
    setLoading(true);
    console.log("Sending Transaction: ", campaignaddress, groupcode)
    //ThirdWeb
    
    const transaction = prepareContractCall({
      contract: fundingcontract,
      method:
        "function addCampaignMember(address _campaignAddress, string _groupCode)",
      params: [campaignaddress, groupcode],
    });
    sendTransaction(transaction);
    /*setTimeout(() => {
      
    }, 2000);*/
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
