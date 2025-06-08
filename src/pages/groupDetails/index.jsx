import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { IMAGES } from "../../constants/assets";
import Balance from "../../components/balance";
import CashFlow from "../../components/cashFlow";
import Table from "../../components/table";
import { useLocation } from 'react-router-dom';
import { client } from "../../client";
import { getContract, prepareEvent, watchContractEvents, prepareContractCall } from "thirdweb";
import { polygonAmoy } from "thirdweb/chains";
import { useReadContract, useSendTransaction } from "thirdweb/react";
import { USDC_ADDRESS } from "../../constants/address";
import {
  useActiveAccount,
} from "thirdweb/react";

const PopUp = ({ onClose, onApprove, onConfirm, usdcBalance, goal, approved }) => {
  const isInsufficientFunds = Number(usdcBalance) < Number(goal);
  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popup}>
        <p className={styles.popupTitle}>Are you sure you want to fund this group?</p>
        <ul className={styles.instructions}>
          <li>Approve the Transaction</li>
          <li>Deposit the fund</li>
        </ul>
        <div className={styles.balance}>
          Your Balance: <span>{usdcBalance}</span>
        </div>
        <div className={styles.goal}>
          Goal: <span>{Number(goal)}</span>
        </div>
        {isInsufficientFunds && (
          <p className={styles.errorMessage}>Not enough funds</p>
        )}
        <div className={styles.buttons}>
          <button
            className={styles.approveButton}
            onClick={onApprove}
            disabled={isInsufficientFunds}
          >
            Approve
          </button>
          <button
            className={styles.confirmButton}
            onClick={onConfirm}
            disabled={!approved || isInsufficientFunds}
          >
            Confirm
          </button>
        </div>
        <button className={styles.closeButton} onClick={onClose}>
          Cancle
        </button>
      </div>
    </div>
  );
};

const GroupDetails = () => {
  const [isPopUpVisible, setPopUpVisible] = useState(false);
  const activeAccount = useActiveAccount();
  const location = useLocation();
  const linkData = location.state;
  const [event, setevent] = useState(false);
  const [approved, setApproved] = useState(false);
  const campaignaddress = linkData?.groupContractAddress
  const contract = getContract({
    client: client,
    chain: polygonAmoy,
    address: linkData?.groupContractAddress,
  });
  const usdccontract = getContract({
    client: client,
    chain: polygonAmoy,
    address: USDC_ADDRESS,
  })
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
  const { data: goal, isPending: loadinggoal } = useReadContract({
    contract,
    method: "function goal() view returns (uint256)",
    params: [],
  });
  const { data: allowance, isPending: loadingallowance } = useReadContract({
    contract: usdccontract,
    method:
      "function allowance(address owner, address spender) view returns (uint256)",
    params: [activeAccount.address, campaignaddress],
  });
  const { data: cycle } = useReadContract({
    contract,
    method: "function cycle() view returns (uint256)",
    params: [],
  });
  const { data: groupsize } = useReadContract({
    contract,
    method: "function groupSize() view returns (uint256)",
    params: [],
  });
  const { data: memberCount } = useReadContract({
    contract,
    method: "function memberCount() view returns (uint256)",
    params: [],
  });
  const { data: contractbalance } = useReadContract({
    contract,
    method:
      "function getContractBalance() view returns (uint256)",
    params: [],
  });

  const { data: completed } = useReadContract({
    contract,
    method:
      "function cycleCompleted(address, uint256) view returns (bool)",
    params: [activeAccount.address, cycle],
  });

  const { data: usdcbalance } = useReadContract({
    contract: usdccontract,
    method:
      "function balanceOf(address account) view returns (uint256)",
    params: [activeAccount.address],
  });

  const formattedUsdcbalance = usdcbalance
    ? (Number(usdcbalance) / 1e6).toFixed(6)
    : "0.000000";

  const handleFundClick = () => {
    setPopUpVisible(true);
  };

  const handleClosePopUp = () => {
    setPopUpVisible(false);
  };
  const preparedEvent = prepareEvent({
    signature:
      "event Approval(address indexed owner, address indexed spender, uint256 value)",
  });
  const events = watchContractEvents({
    contract: usdccontract,
    events: [preparedEvent],
    onEvents: (events) => {
      console.log(events)
      setevent(events)
    },
  });
  useEffect(() => {
    if (event) {
      console.log("Successfully added to Group", event[0])
      alert(`Approved:\nBlockHash: ${event[0]['args']["blockHash"]}\nTransaction Hash: ${event[0]["transactionHash"]}`);
      setApproved(true)
    }
  }, [event]);
  useEffect(() => {
    if (!loadinggoal && !loadingallowance) {
      let contractallowance = Number(allowance) / 1e6;
      console.log("Allowance: ", allowance, "goal: ", goal)
      if (contractallowance >= goal) {
        console.log("Already Approved!")
        setApproved(true);
      } else {
        setApproved(false);
      }
    }
  }, [loadinggoal, loadingallowance, allowance, goal]);
  const { mutate: sendTransaction } = useSendTransaction();
  const handleApprove = () => {
    console.log(campaignaddress)
    const transaction = prepareContractCall({
      contract: usdccontract,
      method:
        "function approve(address spender, uint256 value) returns (bool)",
      params: [campaignaddress, Number(goal) * 1e6],
    });
    sendTransaction(transaction);
    console.log("Approved!");
    // Add logic for approval
  };

  const handleConfirm = () => {
    const transaction = prepareContractCall({
      contract,
      method: "function fund(uint256 _amount)",
      params: [Number(goal) * 1e6],
    });
    try {
      sendTransaction(transaction);
    } catch (error) {
      console.log(error);
    }

    console.log("Confirmed!");
    // Add logic for confirmation
    setPopUpVisible(false);
  };
  const resolve = () => {
    const transaction = prepareContractCall({
      contract,
      method: "function resolveCycle()",
      params: [],
    });
    sendTransaction(transaction);


  }
  const firstTableHeaders = ["S/N", "Wallet", "Payment Date", "Status"];
  console.log(memberCount)
  let firstTableData = []
  for (let i = 0; i < memberCount; i++) {
    const { data: members } = useReadContract({
      contract,
      method:
        "function members(uint256) view returns (address)",
      params: [i],
    })
    const { data: MemberCycleStatus } = useReadContract({
      contract,
      method:
        "function cycleCompleted(address, uint256) view returns (bool)",
      params: [members, cycle],
    })
    firstTableData.push(
      { "S/N": i+1, Wallet: members, "Payment Date": "23 August, 2024", Status: MemberCycleStatus === true ? "paid" : "-" }
    )
    console.log(members, MemberCycleStatus)
  }
  
 /* const firstTableData = [
    { "S/N": 1, Wallet: "46578903394857390239", "Payment Date": "23 August, 2024", Status: "paid" },
    { "S/N": 2, Wallet: "46578903394857390239", "Payment Date": "23 August, 2024", Status: "unpaid" },
    { "S/N": 3, Wallet: "46578903394857390239", "Payment Date": "23 August, 2024", Status: "next" },
  ];*/
  console.log("Current Cycle", cycle, "Group size", groupsize)
  return (
    <div className={styles.groups}>
      <div className={styles.titleContainer}>
        <span className={styles.title}>Group Details</span>{" "}
        <p className={styles.title}> Group Code: {groupcode}</p>
        <button
          className={styles.fundbutton}
          onClick={handleFundClick}
          disabled={cycle > groupsize}
        >
          {cycle > groupsize ? (
            "All cycle completed"
          ) : (
            <>
              Fund: $<span className={styles.goalvalue}>{String(goal)}</span>
            </>
          )}
        </button>
        <img src={IMAGES.EDIT_ICON} alt="edit" />
      </div>

      <Balance campaignAddress={campaignaddress} groupSize={groupsize} groupCount={memberCount} goal={goal} cycle={cycle} contractBalance={contractbalance} />
      <CashFlow goal={goal} cycle={cycle} contractBalance={contractbalance} groupSize={groupsize} />
      <Table headers={firstTableHeaders} data={firstTableData} />
      <button onClick={resolve}>Resolve</button>
      {isPopUpVisible && (
        <PopUp
          onClose={handleClosePopUp}
          onApprove={handleApprove}
          onConfirm={handleConfirm}
          usdcBalance={formattedUsdcbalance}
          goal={goal}
          approved={approved}
        />
      )}
    </div>
  );
};

export default GroupDetails;
