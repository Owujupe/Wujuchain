import React from "react";
import styles from "./styles.module.scss";
import { Input, Radio, DatePicker, Select } from "antd";
import { IMAGES } from "../../constants/assets";
import moment from "moment";
import dayjs from "dayjs";

const GroupForm = ({ onSubmit, data, setData }) => {
  const { TextArea } = Input;
  const generateOptions = (start = 1, end = 100) => {
    return Array.from({ length: end - start + 1 }, (_, index) => ({
      value: start + index,
      label: `${start + index} ${start + index === 1 ? "person" : "people"}`,
    }));
  };
  const amountOptions = [
    { value: 5, label: "5" },
    { value: 10, label: "10" },
    { value: 15, label: "15" },
    { value: 20, label: "20" },
    { value: 25, label: "25" },
    { value: 30, label: "30" },
    { value: 35, label: "35" },
    { value: 40, label: "40" },
    { value: 45, label: "45" },
    { value: 50, label: "50" },
  ];
  return (
    <div className={styles.container}>
      <Input
        placeholder="Group Name"
        className={styles.input}
        value={data.groupName}
        onChange={(e) => setData({ ...data, groupName: e.target.value })}
      />
      <TextArea
        placeholder="Group Purpose"
        className={styles.input}
        rows={1}
        value={data.groupPurpose}
        onChange={(e) => setData({ ...data, groupPurpose: e.target.value })}
      />
      <Select
        placeholder="Group Size"
        defaultValue={data.groupSize ? data.groupSize : undefined}
        className={styles.select}
        options={generateOptions(1, 10)}
        value={data.groupSize ? data.groupSize : undefined}
        onChange={(value) => setData({ ...data, groupSize: value })}
      />
      <Select
        placeholder="Amount"
        defaultValue={data.amount ? data.amount : undefined}
        className={styles.select}
        options={amountOptions}
        value={data.amount ? data.amount : undefined}
        onChange={(value) => setData({ ...data, amount: value })}
      />

      <div className={styles.frequencyContainer}>
        <span className={styles.label}>Frequency</span>
        <Radio.Group
          defaultValue="daily"
          className={styles.radioGroup}
          buttonStyle="solid"
          value={data.frequency}
          onChange={(e) => {
            setData({ ...data, frequency: e.target.value });
          }}
        >
          <Radio.Button value="Daily" className={styles.radioButton}>
            Daily
          </Radio.Button>
          <Radio.Button value="Bi-weekly" className={styles.radioButton}>
            Weekly
          </Radio.Button>
          <Radio.Button value="Monthly" className={styles.radioButton}>
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
            {/* <label className={styles.label}>Start Date</label> */}
            <DatePicker
              className={styles.datePicker}
              format="MM/DD/YYYY"
              placeholder="MM/DD/YYYY"
              suffixIcon={null}
              value={data.startDate ? dayjs(data.startDate) : null}
              onChange={(date, dateString) => {
                setData({
                  ...data,
                  startDate: date
                    ? moment(date?.valueOf()).format("MM/DD/YYYY")
                    : null,
                });
              }}
            />
          </div>
          {/* <div className={styles.dateField}>
            <label className={styles.label}>End Date</label>
            <DatePicker
              className={styles.datePicker}
              format="MM/DD/YYYY"
              placeholder="MM/DD/YYYY"
              suffixIcon={null}
            />
          </div> */}
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={() => onSubmit(data)}>Create</button>
      </div>
    </div>
  );
};

export default GroupForm;
