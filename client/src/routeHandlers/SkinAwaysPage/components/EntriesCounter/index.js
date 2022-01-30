import React from "react";
import { ReactComponent as UserIconV2 } from "../../../../assets/img/user-icon-small-v2.svg";

import styles from "./EntriesCounter.module.scss";

const EntriesCounter = () => {
  return (
    <div className={styles.entriesCounter}>
      <span className={styles.countNumber}>345</span>
      <span className={styles.countLabel}>Active entries</span>
      <UserIconV2 />
    </div>
  );
};

export default EntriesCounter;
