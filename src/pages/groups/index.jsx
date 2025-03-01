import { getContract } from "thirdweb";
import { useReadContract } from "thirdweb/react"; 
import { client } from "../../client";
import { polygonAmoy } from "thirdweb/chains";
import { CROWDFUNDING_FACTORY } from "../../constants/address";
import GroupCard from "../../components/groupcard";
import styles from "./styles.module.scss";

const GROUPS = () => {
  const contract = getContract({
    client: client,
    chain: polygonAmoy,
    address: CROWDFUNDING_FACTORY,
  });

  const { data: groups, isPending } = useReadContract({
    contract,
    method:
      "function getAllCampaigns() view returns ((address campaignAddress, address owner, string groupname, uint256 creationTime, uint256 groupSize)[])",
    params: [],
  });

  console.log(groups);

  return (
    <main className={`${styles.main}`}>
      <div className={styles.content}>
        <h1 className={styles.heading}>Groups:</h1>
        <div className={styles.grid}>
          {!isPending && groups && (
            groups.length > 0 ? (
              groups.map((group) => (
                <div key={group.campaignAddress}>
                  <GroupCard groupAddress={group.campaignAddress} />
                </div>
              ))
            ) : (
              <p>No groups found</p>
            )
          )}
        </div>
      </div>
    </main>
  );
};

export default GROUPS;
