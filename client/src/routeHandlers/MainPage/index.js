import React from "react";

import Details from "../../components/Details";
import Switch from "../../components/Switch";
import Button from "../../components/Button";

import styles from "./MainPage.module.scss";

const MainPage = () => {
  return (
    <div className={styles.mainPageWrapper}>
      <span className={styles.proPlanLabel}>Pro Plan Subscription</span>

      <div className={styles.proPlanSubscriptionWrapper}>
        <div className={styles.paymentDetailsWrapper}>
          <Details value="Payment method:">PayPal</Details>
          <Details value="Last payment:">14.10.2020</Details>
          <Details value="Next payment:">14.10.2020</Details>
        </div>
        <div className={styles.notificationSwitchersWrapper}>
          <Details value="Automatic billing" withSwitch>
            <Switch />
          </Details>
          <Details value="E-Mail notifications" withSwitch>
            <Switch />
          </Details>
        </div>
        <div className={styles.subscriptionButtonWrapper}>
          <Button text="Cancel subscription" warning={true} />
          <span className={styles.subscriptionTitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </span>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
