import React, { useState } from "react";
import styles from "./styles.module.scss";
import { IMAGES } from "../../constants/assets";
import GroupForm from "../../components/groupForm";
import { useNavigate } from "react-router-dom";
import ModalComponent from "../../components/modal";
import { toast } from "react-toastify";
import ToastMessage from "../../components/toast";
import { ROUTES } from "../../router/routes";

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
  const [modalOpenCreate, setModalOpenCreate] = useState(false);
  const [modalOpenGenerate, setModalOpenGenerate] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = (groupData) => {
    setModalOpenCreate(true);
    const isFormComplete =
      createGroup.groupName.trim() !== "" &&
      createGroup.groupPurpose.trim() !== "" &&
      createGroup.groupSize.trim() !== "" &&
      createGroup.frequency.trim() !== "" &&
      createGroup.startDate !== "" &&
      createGroup.amount.trim() !== "";

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
  };
  const onConfirmCreate = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setModalOpenCreate(false);
      setModalOpenGenerate(true);
    }, 5000);
  };
  const onConfirmGenerate = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setModalOpenGenerate(false);
      navigate(ROUTES.GROUP_DETAILS);
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
