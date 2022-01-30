import React from "react";
import styles from "./Details.module.scss";
import classNames from "classnames";

const Details = ({ value, children, withSwitch }) => {
  return (
    <div className={styles.details}>
      <span
        className={classNames(styles.label, {
          [styles.labelBlack]: withSwitch,
        })}
      >
        {value}{" "}
      </span>
      <span className={styles.value}>{children}</span>
    </div>
  );
};

export default Details;
