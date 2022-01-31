import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import AppliedFilter from "./AppliedFilter";
import { ReactComponent as Triangle } from "../../assets/img/triangle.svg";
import styles from "./SelectWithDropdown.module.scss";

const SelectWithDropdown = ({ label, dropdownLabels }) => {
  const [isOpenDropdown, handleDropdown] = useState(false);
  const [appliedFilters, handleAppliedFilters] = useState([]);

  const filterRef = useRef();

  const toggleDropdown = () => {
    handleDropdown(!isOpenDropdown);
  };

  const handleOutsideClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(filterRef.current)) {
      handleDropdown(false);
    }
  };

  const removeFilter = (value) => {
    const filteredArray = appliedFilters.filter((el) => el !== value);
    handleAppliedFilters(filteredArray);
  };

  const addFilter = (filter) => {
    //a crutch for filters to not overwrite the button, hehe
    if (!appliedFilters.includes(filter) && appliedFilters.length < 3) {
      handleAppliedFilters((prevState) => [filter, ...prevState]);
      handleDropdown(false);
    } else {
      handleDropdown(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
  }, []);

  return (
    <div className={styles.selectDropdown} ref={filterRef}>
      <span className={styles.dropdownWrapper} onClick={toggleDropdown}>
        {label}
        <Triangle />
      </span>
      <div
        className={classNames(styles.dropdown, {
          [styles.dropdownActive]: isOpenDropdown,
        })}
      >
        {dropdownLabels.map(({ value, id }) => (
          <span key={value + id} onClick={() => addFilter(value)}>
            {value}
          </span>
        ))}
      </div>
      {!!appliedFilters.length &&
        appliedFilters.map((value) => (
          <AppliedFilter value={value} key={value} onClick={removeFilter} />
        ))}
    </div>
  );
};

export default SelectWithDropdown;
