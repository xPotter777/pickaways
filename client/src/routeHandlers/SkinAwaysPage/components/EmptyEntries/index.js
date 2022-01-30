import React from "react";

import { ReactComponent as UserIconBig } from "../../../../assets/img/user-icon-big.svg";

import styles from "./EmptyEntries.module.scss";

const EmptyEntries = () => {
  return (
    <div className={styles.emptyEntriesWrapper}>
      <UserIconBig />
      <span>Entries list is empty.</span>
      <span>Please paste the tweet url to load users.</span>
    </div>
  );
};

export default EmptyEntries;
