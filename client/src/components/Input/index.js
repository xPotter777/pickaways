import React from "react";
import styles from "./Input.module.scss";

const Input = ({ type, placeHolder, onChange }) => {
  return (
    <input
      className={styles.input}
      type={type}
      placeholder={placeHolder}
      onChange={onChange}
    />
  );
};

export default Input;
