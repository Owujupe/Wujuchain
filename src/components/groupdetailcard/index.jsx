import { client } from "../../client";
import { getContract } from "thirdweb";
import { polygonAmoy } from "thirdweb/chains";
import { useReadContract } from "thirdweb/react";
import { ROUTES } from "../../router/routes";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import { IMAGES } from "../../constants/assets";

const GroupDetailCard = (groupAddress) => {
  const navigate = useNavigate();
  const contractaddress = groupAddress.groupAddress;
  const contract = getContract({
    client: client,
    chain: polygonAmoy,
    address: contractaddress,
  });

  const { data: groupName } = useReadContract({
    contract,
    method: "function groupname() view returns (string)",
    params: [],
  });
  const { data: groupDescription } = useReadContract({
    contract,
    method: "function description() view returns (string)",
    params: [],
  });
  const { data: goal, isPending: isLoadingGoal } = useReadContract({
    contract,
    method: "function goal() view returns (uint256)",
    params: [],
  });
  const { data: memberCount } = useReadContract({
    contract,
    method: "function memberCount() view returns (uint256)",
    params: [],
  });
  const { data: groupSize } = useReadContract({
    contract,
    method: "function groupSize() view returns (uint256)",
    params: [],
  });
  const { data: balance, isPending: isLoadingBalance } = useReadContract({
    contract,
    method: "function getContractBalance() view returns (uint256)",
    params: [],
  });
  return (
    <div className={styles.cardContainer}>
      <div>
        <h2 className={styles.groupTitle}>{groupName}</h2>
        <p className={styles.groupDescription}>{groupDescription}</p>
        <p>
          {" "}
          Group Member: {String(memberCount)}/{String(groupSize)}{" "}
        </p>
      </div>
      <button
        onClick={() =>
          navigate(ROUTES.GROUP_DETAILS, {
            state: { groupContractAddress: contractaddress },
          })
        }
        className={styles.viewGroupButton}
      >
        <span className={styles.viewGroupButtonText}> View My Group </span>
        <div className={styles.viewGroupIconContainer}>
          <img src={IMAGES.RIGHT_ARROW} alt="right-arrow" />
        </div>
      </button>
    </div>
  );
};

export default GroupDetailCard;
