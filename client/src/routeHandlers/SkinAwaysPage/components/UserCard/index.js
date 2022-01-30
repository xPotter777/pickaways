import React from "react";
import styles from "./UserCard.module.scss";

const UserCard = ({ logo = "defaultUserLogo", nickname, date }) => {
  return (
    <div className={styles.giveawayParticipant}>
      <img
        src={require(`../../../../assets/png/${logo}.png`)}
        alt="retweet"
        className={styles.humanLogo}
      />
      <span className={styles.userNickname}>{nickname}</span>
      <span className={styles.date}>{date}</span>
    </div>
  );
};

export default UserCard;
