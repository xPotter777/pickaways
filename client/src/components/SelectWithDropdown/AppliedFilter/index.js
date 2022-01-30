import React from "react";
import { ReactComponent as Cross } from "../../../assets/img/cross.svg";

import styles from "./AppliedFilter.module.scss";

const AppliedFilter = ({ value, onClick }) => {
  return (
    <div className={styles.appliedFiltersWrapper}>
      <svg onClick={() => onClick(value)} className={styles.icon}>
        <Cross />
      </svg>
      <span>{value}</span>
    </div>
  );
};

export default AppliedFilter;
