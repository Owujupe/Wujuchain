import React from "react";
import styles from "./styles.module.scss";
import { Input, Radio, DatePicker } from "antd";
import { IMAGES } from "../../constants/assets";
const GroupForm = () => {
  const { TextArea } = Input;

  return (
    <div className={styles.container}>
      <Input placeholder="Group Name" className={styles.input} />
      <TextArea placeholder="Group Purpose" className={styles.input} rows={1} />
      <Input placeholder="Group Size" className={styles.input} />
      <Input placeholder="Amount" className={styles.input} />
      <div className={styles.frequencyContainer}>
        <span className={styles.label}>Frequency</span>
        <Radio.Group
          defaultValue="daily"
          className={styles.radioGroup}
          buttonStyle="solid"
        >
          <Radio.Button value="daily" className={styles.radioButton}>
            Daily
          </Radio.Button>
          <Radio.Button value="weekly" className={styles.radioButton}>
            Weekly
          </Radio.Button>
          <Radio.Button value="monthly" className={styles.radioButton}>
            Monthly
          </Radio.Button>
        </Radio.Group>
      </div>

      <div className={styles.dateContainer}>
        <span className={styles.label}>Select Date</span>
        <div className={styles.dateInfo}>
          <p>Enter Date </p>
          <img src={IMAGES.CALENDAR_ICON} alt="info" />
        </div>

        <div className={styles.dateFields}>
          <div className={styles.dateField}>
            <label className={styles.label}>Start Date</label>
            <DatePicker
              className={styles.datePicker}
              format="MM/DD/YYYY"
              placeholder="MM/DD/YYYY"
              suffixIcon={null}
            />
          </div>
          <div className={styles.dateField}>
            <label className={styles.label}>End Date</label>
            <DatePicker
              className={styles.datePicker}
              format="MM/DD/YYYY"
              placeholder="MM/DD/YYYY"
              suffixIcon={null}
            />
          </div>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button>Create</button>
      </div>
    </div>
  );
};

export default GroupForm;
