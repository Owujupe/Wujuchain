import React from "react";
import { Calendar, Button } from "antd";
import styles from "./styles.module.scss";
import { IMAGES } from "../../constants/assets";


const CalendarComponent = () => {
  const headerRender = ({ value, onChange }) => {
    const currentMonth = value.format("MMMM");
    const currentYear = value.format("YYYY");

    const handlePrevMonth = () => {
      onChange(value.subtract(1, "month"));
    };

    const handleNextMonth = () => {
      onChange(value.add(1, "month"));
    };

    return (
      <div className={styles.calenderHeader}>
        <span className={styles.calenderHeaderTitle}>
          {currentMonth} {currentYear}
        </span>
        <div>
          <Button type="text" onClick={handlePrevMonth}>
            <img src={IMAGES.PREV_ICON} alt="prev" />
          </Button>

          <Button className={styles.nextButton} type="text" onClick={handleNextMonth}>
            <img src={IMAGES.NEXT_ICON} alt="next" />
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.calendarContainer}>
      <Calendar
        fullscreen={false}
        headerRender={headerRender}
        
      />
    </div>
  );
};

export default CalendarComponent;
