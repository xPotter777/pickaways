import React from "react";
import styles from "./Switch.module.scss";

const Switch = () => {
  return (
    <div>
      <label className={styles.switch}>
        <input type="checkbox" />
        <span>
          <strong></strong>
        </span>
      </label>
    </div>
  );
};

export default Switch;
