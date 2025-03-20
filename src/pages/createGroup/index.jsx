import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { IMAGES } from "../../constants/assets";
import GroupForm from "../../components/groupForm";
import { useNavigate } from "react-router-dom";
import ModalComponent from "../../components/modal";
import { toast } from "react-toastify";
import ToastMessage from "../../components/toast";
import { ROUTES } from "../../router/routes";

//thirdweb
import { useSendTransaction, useContractEvents } from "thirdweb/react"; 
import { getContract, prepareContractCall, prepareEvent, watchContractEvents } from "thirdweb";
import { client } from "../../client";
import {polygonAmoy} from "thirdweb/chains";
import { CROWDFUNDING_FACTORY, ADMIN_ADDRESS } from "../../constants/address";

const CreateGroup = () => {
  const navigate = useNavigate();
  const [createGroup, setCreateGroup] = useState({
    groupName: "",
    groupPurpose: "",
    groupSize: "",
    frequency: "",
    startDate: "",
    amount: "",
  });
  const [groupcode, setGroupCode] =useState()
  const [contractaddress, setContractAddress] =useState()
  const [modalOpenCreate, setModalOpenCreate] = useState(false);
  const [modalOpenGenerate, setModalOpenGenerate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [event, setevent] = useState(false);
  //thirdweb
  const contract = getContract({
    client: client,
    chain: polygonAmoy,
    address:CROWDFUNDING_FACTORY,
  })
  const frequency = {
    "Daily":1,
    "Bi-weekly":7,
    "Monthly":30
  }
  const preparedEvent = prepareEvent({
    signature:
      "event CampaignCreated(address indexed campaignAddress, address indexed owner, string groupname, uint256 creationTime, uint256 groupSize)",
  });
  const events = watchContractEvents({
    contract: contract,
    events: [preparedEvent],
    onEvents: (events) => {
      console.log(typeof(events))
      setevent(events)
    },
    });
  useEffect(() => {
    if (event) {
      console.log("Transaction result", event[0])
      alert(`Successfully created: ${event[0]['args']["groupname"]}\nTransaction Hash: ${event[0]["transactionHash"]}\nGroup Code: ${groupcode}\nContract Address: ${event[0]["args"]["campaignAddress"]}`);
      setContractAddress(event[0]['args']["campaignAddress"])
      setLoading(false);
      setModalOpenCreate(false);
      setModalOpenGenerate(true);
    }
  }, [event]);

  const onSubmit = (groupData) => {
    setModalOpenCreate(true);
    const isFormComplete =
      createGroup.groupName.trim() !== "" &&
      createGroup.groupPurpose.trim() !== "" &&
      createGroup.groupSize !== "" &&
      createGroup.frequency.trim() !== "" &&
      createGroup.startDate !== "" &&
      createGroup.amount !== "";

    if (isFormComplete) {
      setModalOpenCreate(true);
    } else {
      toast.error(
        <ToastMessage
          message={"Please fill in all fields before proceeding"}
          isError={true}
        />
      );
      setModalOpenCreate(false);
    }
  };
  const onCancel = () => {
    setModalOpenCreate(false);
    setLoading(false);
  };
  const { mutate: sendTransaction } = useSendTransaction();
  const onConfirmCreate = () => {
    setLoading(true);
    const randomNumber = Math.floor(Math.random() * 10000) + 1;
    const randomChar1 = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    const randomChar2 = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    const ranNum = String(randomNumber)
    const groupCode=randomChar1 + randomChar2+ ranNum
    console.log(groupCode)
    setGroupCode(groupCode)
    //Add Create Group Function on Factory Contract
    const transaction = prepareContractCall({
      contract,
      method:
        "function createCampaign(string _groupname, string _description, uint256 _goal, uint256 _durationInDays, uint256 _groupsize, address _admit, string _groupcode)",
      params: [
        createGroup.groupName.trim(),
        createGroup.groupPurpose.trim(),
        createGroup.amount,
        frequency[createGroup.frequency.trim()],
        createGroup.groupSize,
        ADMIN_ADDRESS,
        groupCode,
      ],
    });
    sendTransaction(transaction);
  };
  const onConfirmGenerate = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setModalOpenGenerate(false);
      navigate(ROUTES.GROUP_DETAILS, {state: {groupContractAddress: contractaddress}});
    }, 5000);
  };
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <button className={styles.backButton} onClick={() => navigate(-1)}>
          <img src={IMAGES.BACK_ARROW} alt="back" />
          <span>Back</span>
        </button>
      </div>
      <div className={styles.rightSection}>
        <p className={styles.title}>Start with a group name and description</p>
        <GroupForm
          onSubmit={onSubmit}
          data={createGroup}
          setData={setCreateGroup}
        />
      </div>

      <ModalComponent
        modalOpen={modalOpenCreate}
        setModalOpen={setModalOpenCreate}
        onCancel={onCancel}
        onConfirm={onConfirmCreate}
        title="Review Group Detials"
        data={createGroup}
        isCreateGroup={true}
        isJoinGroup={false}
        loading={loading}
        confirmButtonText="Confirm"
        cancelButtonText="Change"
      />
      <ModalComponent
        modalOpen={modalOpenGenerate}
        setModalOpen={setModalOpenGenerate}
        onConfirm={onConfirmGenerate}
        confirmButtonText="Generate"
        title="Generate Group Code"
        data={createGroup}
        loading={loading}
      />
    </div>
  );
};

export default CreateGroup;
