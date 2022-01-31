import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
//context
import { ModalContext } from "../../App";

import Button from "../Button";

import { ReactComponent as PickAways } from "../../assets/img/pickaways-logo.svg";
import { ReactComponent as TwitterIcon } from "../../assets/img/twitter-icon.svg";
import { ReactComponent as DiscordIcon } from "../../assets/img/discord-icon.svg";

import styles from "./Header.module.scss";

const Header = () => {
  const { setModalActive } = useContext(ModalContext);
  console.log(setModalActive);
  return (
    <nav className={styles.headerWrapper}>
      <div className={styles.navWrapper}>
        <div className={styles.logoWrapper}>
          <NavLink to="/">
            <PickAways />
          </NavLink>
        </div>
        <div className={styles.navigation}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Main
          </NavLink>
          <NavLink
            to="/skin-aways"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            SkinAways
          </NavLink>
          <NavLink
            to="/bet-refs"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            BetRefs
          </NavLink>
          <NavLink
            to="/pro-plan"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Pro Plan
          </NavLink>
          <NavLink
            to="/faq"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            FAQ
          </NavLink>
        </div>
        <div className={styles.navigationRightPart}>
          <div className={styles.loginButtonWrapper}>
            <Button text="Sign in" onClickAction={setModalActive} />
          </div>
          <div className={styles.iconsWrapper}>
            <TwitterIcon />
            <DiscordIcon />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
