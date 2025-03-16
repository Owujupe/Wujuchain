import {useActiveAccount, useReadContract} from "thirdweb/react"
import { getContract } from "thirdweb";
import GroupDetailCard from "../../components/groupdetailcard";
import { client } from "../../client";
import { polygonAmoy } from "thirdweb/chains";
import { CROWDFUNDING_FACTORY } from "../../constants/address";
import styles from "./styles.module.scss";

const JoinedGroup = () => {
    const activeAccount = useActiveAccount();
    console.log(activeAccount)
    const contract = getContract({
        client: client,
        chain: polygonAmoy,
        address: CROWDFUNDING_FACTORY,
      });
    
      const { data: joinedgroups, isPending } = useReadContract({
        contract,
        method:
          "function getJoinedCampaigns(address _user) view returns (address[])",
        params: [activeAccount.address],
      });
    
      console.log(joinedgroups);
    
      return (
        <main className={`${styles.main}`}>
          <div className={styles.content}>
            <h1 className={styles.heading}>Joined Groups:</h1>
            <p> Groups that you Joined</p>
            <div className={styles.grid}>
              {!isPending && joinedgroups && (
                joinedgroups.length > 0 ? (
                  joinedgroups.map((mygroup) => (
                    <div key={mygroup.joinedgroups}>
                      <GroupDetailCard groupAddress={mygroup} />
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
export default JoinedGroup;