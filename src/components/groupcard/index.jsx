import { client } from "../../client";
import { getContract } from "thirdweb";
import { polygonAmoy } from "thirdweb/chains";
import { useReadContract } from "thirdweb/react";
import { ROUTES } from "../../router/routes";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";

const GroupCard = (groupAddress) => {
    const navigate = useNavigate();
    const contractaddress = groupAddress.groupAddress;
    console.log("GroupAddress ", contractaddress, typeof(contractaddress));

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

    const totalBalance = balance?.toString();
    const totalGoal = goal?.toString();
    let balancePercentage = (totalBalance / totalGoal) * 100;

    if (balancePercentage >= 100) {
        balancePercentage = 100;
    }

    return (
        <div className={styles.cardContainer}>
            <div>
                <h2 className={styles.groupTitle}>{groupName}</h2>
                <p className={styles.groupDescription}>{groupDescription}</p>
            </div>
                <button onClick={() => navigate(ROUTES.JOIN_GROUP, {state: {groupContractAddress: contractaddress}})} className={styles.viewGroupButton}>
                    Join Group
                    <svg
                        className={styles.viewGroupIcon}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                  
                        viewBox="-30 0 52 10"
                    >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                    </svg>
            </button>

        </div>
    );
};

export default GroupCard;
