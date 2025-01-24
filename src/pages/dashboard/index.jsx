import React from "react";
import styles from "./styles.module.scss";
import Button from "../../components/button";
import { IMAGES } from "../../constants/assets";
import { ROUTES } from "../../router/routes";
import { useNavigate } from "react-router-dom";
import CalendarComponent from "../../components/calendar";

const DASHBOARD = () => {
  const collectors = [
    {
      id: 1,
      name: "Aoi Todo",
      email: "aoi.todo@gmail.com",
      avatar: IMAGES.BENEFICIARY_AVATAR,
      date: "May 29, 2017",
    },
    {
      id: 2,
      name: "John Doe",
      email: "john.doe@gmail.com",
      avatar: IMAGES.BENEFICIARY_AVATAR,
      date: "May 30, 2017",
    },
    {
      id: 3,
      name: "Jane Doe",
      email: "jane.doe@gmail.com",
      avatar: IMAGES.BENEFICIARY_AVATAR,
      date: "May 31, 2017",
    },

  ];
  const navigate = useNavigate();
  return (
    <div className={styles.dashboard}>
      <div className={styles.titleContainer}>
        <span className={styles.title}>Dashboard</span>{" "}
      </div>
      <div className={styles.dashboardContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.balanceContainer}>
            <div className={styles.boxBalance}>
              <div className={styles.balanceHeader}>
                <span className={styles.balanceHeaderTitle}>
                  <h2 className={styles.balanceTitle}>Total Balance</h2>
                  <img src={IMAGES.EYE_ICON} alt="eye" />
                </span>
                <button className={styles.topUpButton}>
                  <span>{"Top up"}</span>
                  <img src={IMAGES.ADD_ICON} alt="add" />
                </button>
              </div>

              <span>
                <p className={styles.balanceAmount}>
                  <span className={styles.balanceCurrency}>{"$"}</span>
                  {"00."}
                  <span className={styles.balanceCurrencyDue}>{"00"}</span>
                </p>
              </span>
            </div>
            <div className={styles.boxOutflow}>
              <div className={styles.outflowHeader}>
                <h2 className={styles.titleOutflow}>Cash Outflow</h2>
              </div>
              <p className={styles.outflowAmount}>
                <span className={styles.outflowCurrency}>{"$"}</span>
                {"2,258."}
                <span className={styles.outflowCurrencyDue}>{"00"}</span>
              </p>
              <p className={styles.outflowStatus}>{"-1,300 this week"}</p>
            </div>
          </div>
          <div className={styles.groupContainer}>
            <div className={styles.boxGroup}>
              <div className={styles.groupHeader}>
                <img
                  src={IMAGES.GROUP_ICON_COLOR}
                  className={styles.groupIcon}
                  alt="group"
                />
              </div>
              <div className={styles.groupContent}>
                <p className={styles.groupNumber}>{"4"}</p>
                <p className={styles.groupTitle}>{"Groups"}</p>
              </div>
            </div>
            <div className={styles.groupButtons}>
              <Button
                icon={IMAGES.GROUP_ICON_WHITE}
                text={"Join Group"}
                onClick={() => {
                  navigate(ROUTES.JOIN_GROUP);
                }}
              />
              <Button
                icon={IMAGES.GROUP_ICON_WHITE}
                text={"Create New Group"}
                buttonStyle={styles.createButton}
                onClick={() => {
                  navigate(ROUTES.CREATE_GROUP);
                }}
              />
            </div>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.calendarContainer}>
            <div className={styles.calendarHeader}>
              <h2 className={styles.calendarTitle}>{"Upcoming Payments"}</h2>
              <span className={styles.reminder}>{"+4 days to go"}</span>
            </div>
            <CalendarComponent />
          </div>
          <div className={styles.collectorsContainer}>
            <div className={styles.collectorsHeader}>
              <span className={styles.collectorsTitle}>
                {"Next Collectors"}
              </span>
            </div>
            {collectors.map((collector) => (
              <div
                key={collector.id}
                className={styles.collectorsProfileContainer}
              >
                <div className={styles.collectorsProfile}>
                  <img src={collector.avatar} alt="collector avatar" />
                  <div className={styles.collectorsInfo}>
                    <p className={styles.collectorsName}>{collector.name}</p>
                    <p className={styles.collectorsEmail}>{collector.email}</p>
                  </div>
                </div>
                <span className={styles.collectorsDate}>{collector.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DASHBOARD;
