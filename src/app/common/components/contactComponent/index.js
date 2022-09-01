import React, { Component } from "react";

import iconTwitter from "Icons/icon-twitter.png";
import iconTwitterWhite from "Icons/icon-twitter-white.png";

import iconSubstack from "Icons/icon-substack.png";
import iconSubstackWhite from "Icons/icon-substack-white.png";

import iconQuora from 'Icons/icon-quora.png';
import iconQuoraWhite from "Icons/icon-quora-white.png";

import Div from "Common/components/div";
import styles from "./contact_component.module.scss";

const ContactComponent = ({ className, isWhite, hideResume }) => {
  return (
    <Div
      row
      justify
      align
      className={`${styles.social_container} ${className}`}
    >
      <a className={styles.icon_link} target="_blank" href="https://chrisrentsch.substack.com/">
        <img
          src={isWhite ? iconSubstackWhite : iconSubstack}
          className={styles.icon}
        />
      </a>
      
	  <a className={styles.icon_link} target="_blank" href="https://twitter.com/crentsch">
        <img
          src={isWhite ? iconTwitterWhite : iconTwitter}
          className={styles.icon}
        />
      </a>
      
	  <a className={styles.icon_link} target="_blank" href="https://www.quora.com/profile/Chris-Rentsch">
        <img
          src={isWhite ? iconQuoraWhite : iconQuora}
          className={styles.icon}
        />
      </a>
    </Div>
  );
};

export default ContactComponent;
