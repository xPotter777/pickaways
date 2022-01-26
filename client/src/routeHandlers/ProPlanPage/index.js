import React from "react";

import { ReactComponent as Group } from "../../assets/img/pick-multiple-winners.svg";

import Button from "../../components/Button";

import BenefitsCard from "./BenefitsCard";

import styles from "./ProPlan.module.scss";

const ProPlanPage = () => {
  return (
    <div className={styles.proPlanPageWrapper}>
      <div className={styles.upperPartWrapper}>
        <div className={styles.proPlanTitle}>pro plan</div>
        <div className={styles.proPlanLabel}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
      <div className={styles.bottomPartWrapper}>
        <div className={styles.cardsWrapper}>
          <BenefitsCard
            label="vFacilisis gravida nequ a cras semper auctor neque vitae"
            iconComponent={<Group />}
          >
            SOME <b>value</b>
          </BenefitsCard>

          <BenefitsCard
            label="vFacilisis gravida nequ a cras semper auctor neque vitae"
            iconComponent={<Group />}
          >
            SOME <b>value</b>
          </BenefitsCard>

          <BenefitsCard
            label="vFacilisis gravida nequ a cras semper auctor neque vitae"
            iconComponent={<Group />}
          >
            SOME <b>value</b>
          </BenefitsCard>
        </div>

        <div className={styles.buttonWrapper}>
          <Button text="Subscribe now" />
          <p>$25/Month</p>
        </div>
      </div>
    </div>
  );
};

export default ProPlanPage;
