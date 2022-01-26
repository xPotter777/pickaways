import React from "react";

import styles from "./BenefitsCard.module.scss";

const BenefitsCard = ({ children, label, iconComponent }) => {
  return (
    <div className={styles.card}>
      <span className={styles.logo}>{iconComponent}</span>
      {children}
      <p>{label}</p>
    </div>
  );
};

export default BenefitsCard;
