import React from "react";

import styles from "./FaqSection.module.scss";

const FaqSection = ({ question, text }) => {
  return (
    <div className={styles.faqSection}>
      <span className={styles.faqQuestion}>{question}</span>
      <span className={styles.faqText}>{text}</span>
    </div>
  );
};

export default FaqSection;
