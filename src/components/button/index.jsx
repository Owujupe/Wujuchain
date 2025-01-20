import React from "react";
import styles from "./styles.module.scss";

const Button = ({ icon, text, buttonStyle, textStyle, onClick }) => {
  return (
    <button
      className={`${styles.buttonContainer} ${buttonStyle}`}
      onClick={onClick}
    >
      <img src={icon} alt="button" />
      <span className={`${styles.text} ${textStyle}`}>{text}</span>
    </button>
  );
};

export default Button;
