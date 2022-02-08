import React from "react";
import styles from "./Modal.module.scss";
import classNames from "classnames";
import axios from "axios";

const onClick = () => {
  axios.get("http://localhost:5000/user/auth/steam");
};

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
        <a href="http://localhost:5000/auth/steam">Login via steam</a>
      </div>
    </div>
  );
};

export default Modal;
