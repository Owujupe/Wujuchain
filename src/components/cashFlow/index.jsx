import React from "react";
import styles from "./styles.module.scss";
import { IMAGES } from "../../constants/assets";

const CashFlow = () => {
  return (
    <section className={styles.boxSection}>
      <div className={styles.boxInflow}>
        <div className={styles.boxContent}>
          <div className={styles.boxHeader}>
            <img src={IMAGES.DOLLAR_ICON_WHITE} alt="dollar" />
            <h2 className={styles.titleInflow}>Cash inflow</h2>
          </div>
          <p className={styles.inflowAmount}>{"$12,258.00"}</p>
          <p className={styles.inflowStatus}>{"+1,300 this week"}</p>
        </div>
      </div>

      <div className={styles.boxOutflow}>
        <div className={styles.boxContent}>
          <div className={styles.boxHeader}>
            <img src={IMAGES.DOLLAR_ICON} alt="dollar" />
            <h2 className={styles.titleOutflow}>Total Pooled</h2>
          </div>
          <p className={styles.outflowAmount}>{"$2,258.00"}</p>
          <p className={styles.outflowStatus}>{"-1,300 this week"}</p>
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
                {"$1500.00"}
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
