import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Triangle } from "../../assets/img/triangle.svg";

import UserCard from "./components/UserCard";
import Card from "./components/Card";
import Button from "../../components/Button";
import Input from "../../components/Input";
import SelectWithDropdown from "../../components/SelectWithDropdown";

import styles from "./SkinAwaysPage.module.scss";

const SkinAwaysPage = () => {
  return (
    <div className={styles.skinAwayPageWrapper}>
      <span className={styles.titleSectionWrapper}>Featured giveaways</span>
      <div className={styles.cardSlider}>
        <Card
          follows="12"
          likes="144"
          retweets="19"
          username="tenge"
          time="00:00:01"
          weaponName="AK-47"
          weaponSkin="Vulkan"
        />
        <Card
          follows="12"
          likes="144"
          retweets="19"
          username="tenge"
          time="00:00:01"
          weaponName="AK-47"
          weaponSkin="Vulkan"
        />
        <Card
          follows="12"
          likes="144"
          retweets="19"
          username="tenge"
          time="00:00:01"
          weaponName="AK-47"
          weaponSkin="Vulkan"
        />
        <Card
          follows="12"
          likes="144"
          retweets="19"
          username="tenge"
          time="00:00:01"
          weaponName="AK-47"
          weaponSkin="Vulkan"
        />
        <Card
          follows="12"
          likes="144"
          retweets="19"
          username="tenge"
          time="00:00:01"
          weaponName="AK-47"
          weaponSkin="Vulkan"
        />

        <Card
          follows="12"
          likes="144"
          retweets="19"
          username="tenge"
          time="00:00:01"
          weaponName="AK-47"
          weaponSkin="Vulkan"
        />

        <Card
          follows="12"
          likes="144"
          retweets="19"
          username="tenge"
          time="00:00:01"
          weaponName="AK-47"
          weaponSkin="Vulkan"
        />

        <Card
          follows="12"
          likes="144"
          retweets="19"
          username="tenge"
          time="00:00:01"
          weaponName="AK-47"
          weaponSkin="Vulkan"
        />
      </div>
      <div className={styles.giveawaySectionWrapper}>
        <div className={styles.giveawayFiltersWrapper}>
          <Input type="url" placeHolder="Tweet rl here..." />
          <SelectWithDropdown
            label="Filter by"
            dropdownLabels={["Like", "Comment", "Retweet", "Follow @___"]}
          />
          <div className={styles.buttonWrapper}>
            <Button text="Select winner" />
          </div>
        </div>
        <div className={styles.giveawayEntriesWrapper}>
          <UserCard date="20.20.2020" nickname="Debik" />
          <UserCard date="20.20.2020" nickname="Debik" />
          <UserCard date="20.20.2020" nickname="Debik" />
          <UserCard date="20.20.2020" nickname="Debik" />
          <UserCard date="20.20.2020" nickname="Debik" />
          <UserCard date="20.20.2020" nickname="Debik" />
          <UserCard date="20.20.2020" nickname="Debik" />
          <UserCard date="20.20.2020" nickname="Debik" />
          <UserCard date="20.20.2020" nickname="Debik" />
          <UserCard date="20.20.2020" nickname="Debik" />
          <UserCard date="20.20.2020" nickname="Debik" />
          <UserCard date="20.20.2020" nickname="Debik" />
          <UserCard date="20.20.2020" nickname="Debik" />
          <UserCard date="20.20.2020" nickname="Debik" />
          <UserCard date="20.20.2020" nickname="Debik" />
          <UserCard date="20.20.2020" nickname="Debik" />
          <UserCard date="20.20.2020" nickname="Debik" />
          <UserCard date="20.20.2020" nickname="Debik" />
          <UserCard date="20.20.2020" nickname="Debik" />
          <UserCard date="20.20.2020" nickname="Debik" />
          <UserCard date="20.20.2020" nickname="Debik" />
          <UserCard date="20.20.2020" nickname="Debik" />
          <UserCard date="20.20.2020" nickname="Debik" />
          <UserCard date="20.20.2020" nickname="Debik" />
          <UserCard date="20.20.2020" nickname="Debik" />
          <UserCard date="20.20.2020" nickname="Debik" />
          <UserCard date="20.20.2020" nickname="Debik" />
          <UserCard date="20.20.2020" nickname="Debik" />
          <UserCard date="20.20.2020" nickname="Debik" />
          <UserCard date="20.20.2020" nickname="Debik" />
          <UserCard date="20.20.2020" nickname="Debik" />
          <UserCard date="20.20.2020" nickname="Debik" />
          <UserCard date="20.20.2020" nickname="Debik" />
          <UserCard date="20.20.2020" nickname="Debik" />
          <UserCard date="20.20.2020" nickname="Debik" />
        </div>
      </div>
      <div className={styles.verifySection}>
        <div>
          <Input type="text" placeHolder="Enter the giveaway id" />
        </div>
        <div className={styles.howItWorksWrapper}>
          <Link to="/faq">
            <span>How it works</span>
            <Triangle />
          </Link>
        </div>
        <div className={styles.verifyButtonWrapper}>
          <Button text="Verify giveaway" />
        </div>
      </div>
    </div>
  );
};

export default SkinAwaysPage;
