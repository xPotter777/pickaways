import React from "react";
import classNames from "classnames";

import styles from "./Button.module.scss";

const Button = ({ onClickAction, text, warning }) => {
  return (
    <button
      className={classNames(styles.button, {
        [styles.buttonWarning]: warning,
      })}
      onClick={onClickAction}
    >
      <span>{text}</span>
    </button>
  );
};

export default Button;
