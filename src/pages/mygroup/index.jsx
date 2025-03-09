import {useActiveAccount, useReadContract} from "thirdweb/react"
import { getContract } from "thirdweb";
import GroupDetailCard from "../../components/groupdetailcard";
import { client } from "../../client";
import { polygonAmoy } from "thirdweb/chains";
import { CROWDFUNDING_FACTORY } from "../../constants/address";
import styles from "./styles.module.scss";

const MyGroup = () => {
    const activeAccount = useActiveAccount();
    const contract = getContract({
        client: client,
        chain: polygonAmoy,
        address: CROWDFUNDING_FACTORY,
      });
    
      const { data: mygroups, isPending } = useReadContract({
        contract,
        method:
            "function getUserCampaigns(address _user) view returns ((address campaignAddress, address owner, string groupname, uint256 creationTime, uint256 groupSize)[])",
        params: [activeAccount?.address],
      });
    
      //console.log(groups);
    
      return (
        <main className={`${styles.main}`}>
          <div className={styles.content}>
            <h1 className={styles.heading}>My Groups:</h1>
            <p> Groups that you created</p>
            <div className={styles.grid}>
              {!isPending && mygroups && (
                mygroups.length > 0 ? (
                    mygroups.map((mygroup) => (
                    <div key={mygroup.campaignAddress}>
                      <GroupDetailCard groupAddress={mygroup.campaignAddress} />
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
export default MyGroup;