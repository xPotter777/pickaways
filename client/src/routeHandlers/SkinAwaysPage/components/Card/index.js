import React from "react";
import styles from "./Card.module.scss";
import { ReactComponent as UserIconSmall } from "../../../../assets/img/user-icon-small.svg";
import { ReactComponent as ClockIcon } from "../../../../assets/img/clock-icon.svg";

const Card = ({
  username,
  time,
  likes,
  retweets,
  follows,
  weaponName,
  weaponSkin,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardLabelsWrapper}>
        <div className={styles.cardLabelUsername}>
          <UserIconSmall />
          <span>{username}</span>
        </div>
        <div className={styles.cardLabel}>
          <ClockIcon />
          {time}
        </div>
        <div className={styles.cardLabel}>
          <img
            src={require("../../../../assets/png/hearth.png")}
            alt="hearth"
            className={styles.hearth}
          />
          <p>{likes}</p>
          <img
            src={require("../../../../assets/png/retweet.png")}
            alt="retweet"
            className={styles.retweet}
          />
          <p>{retweets}</p>
          <img
            src={require("../../../../assets/png/follow.png")}
            alt="follow"
            className={styles.follow}
          />
          <p>{follows}</p>
        </div>
      </div>
      <div className={styles.cardImageWrapper}>
        <img
          src={require("../../../../assets/png/weapon.png")}
          alt="weapon"
          className={styles.weapon}
        />
        <div className={styles.weaponInfoWrapper}>
          <span className={styles.infoWeaponName}>{weaponName}</span>
          <span className={styles.infoWeaponSkin}>{weaponSkin}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
