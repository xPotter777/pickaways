import React, { useState } from "react";

import { ReactComponent as Triangle } from "../../assets/img/triangle.svg";

import styles from "./SelectWithDropdown.module.scss";
import { ReactComponent as Cross } from "../../assets/img/cross.svg";

const SelectWithDropdown = ({ label, dropdownLabels }) => {
  const [isOpenDropdown, handleDropdown] = useState(false);
  return (
    <div className={styles.selectDropdown}>
      <span
        className={styles.dropdownWrapper}
        onClick={() => handleDropdown(!isOpenDropdown)}
      >
        {label}
        <Triangle />
      </span>

      {isOpenDropdown && (
        <div className={styles.dropdown}>
          {dropdownLabels.map((e) => (
            <span key={e}>{e}</span>
          ))}
        </div>
      )}

      <div className={styles.appliedFiltersWrapper}>
        <Cross />
        <span>Like</span>
      </div>
      <div className={styles.appliedFiltersWrapper}>
        <Cross />
        <span>Like</span>
      </div>
      <div className={styles.appliedFiltersWrapper}>
        <Cross />
        <span>Like</span>
      </div>
    </div>
  );
};

export default SelectWithDropdown;
