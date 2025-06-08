import React from "react";
import styles from "./styles.module.scss";
import { IMAGES } from "../../constants/assets";

const CashFlow = ({goal, cycle, contractBalance, groupSize}) => {
  const totalPooled = (Number(cycle)-1)*(Number(goal)*Number(groupSize))
  const Cashinflow = (Number(cycle)-1)*(Number(goal)*Number(groupSize)) + Number(contractBalance)
  console.log(cycle, goal, contractBalance)
  return (
    <section className={styles.boxSection}>
      <div className={styles.boxInflow}>
        <div className={styles.boxContent}>
          <div className={styles.boxHeader}>
            <img src={IMAGES.DOLLAR_ICON_WHITE} alt="dollar" />
            <h2 className={styles.titleInflow}>Cash inflow</h2>
          </div>
          <p className={styles.inflowAmount}>${Cashinflow}</p>
        </div>
      </div>

      <div className={styles.boxOutflow}>
        <div className={styles.boxContent}>
          <div className={styles.boxHeader}>
            <img src={IMAGES.DOLLAR_ICON} alt="dollar" />
            <h2 className={styles.titleOutflow}>Total Pooled</h2>
          </div>
          <p className={styles.outflowAmount}>${totalPooled}</p>
          <p className={styles.inflowStatus}>Current Cycle: {Number(cycle)}</p>
        </div>
      </div>

      <div className={styles.benificaryBox}>
        <div className={styles.beneficiaryContent}>
          <div className={styles.beneficiaryHeader}>
            <div className={styles.beneficiaryHeaderTitle}>
              <img src={IMAGES.DOLLAR_ICON} alt="dollar" />
              <h2 className={styles.titleOutflow}>Next beneficiary</h2>
            </div>
            <div className={styles.beneficiaryAmount}>
              <p className={styles.outflowAmount}>
                ${Number(goal)*Number(groupSize)}
                {"usdc"}
              </p>
            </div>
          </div>
          <div className={styles.beneficiaryProfile}>
            <img src={IMAGES.BENEFICIARY_AVATAR} alt="dollar" />
            <div className={styles.beneficiaryInfo}>
              <p className={styles.beneficiaryName}>{"Aoi Todo"}</p>
              <p className={styles.beneficiaryEmail}>{"aoi.todo@gmail.com"}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CashFlow;
