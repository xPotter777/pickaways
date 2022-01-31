import React from "react";
import Button from "../Button";
import styles from "./Modal.module.scss";
import classNames from "classnames";

const Modal = ({ active, setActive }) => {
  return (
    <div
      className={classNames(styles.modal, { [styles.active]: active })}
      onClick={() => setActive(false)}
    >
      <div
        className={classNames(styles.modalContent, {
          [styles.modalContentActive]: active,
        })}
        onClick={(e) => e.stopPropagation()}
      >
        <span className={styles.login}>Log in</span>
        <span className={styles.label}>
          You need to be logged in to pick a random retweet
        </span>
        <Button text="Log in via Twitter" />
      </div>
    </div>
  );
};

export default Modal;
