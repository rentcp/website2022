import React, { Component, memo, useEffect, useState } from "react";
import { Transition, config } from "react-spring/renderprops";
import Div from "Common/components/div";
import styles from "./header_description.module.scss";
import ContactComponent from "Common/components/contactComponent";

const HeaderDescription = ({
  showDescription,
  onClickProject,
  onClickTimeline,
  isFirstTime
}) => {

  return (
    <Transition
      items={showDescription}
      from={{
        opacity: 0,
        transform: "translateY(calc(50vh - 0px))"
      }}
      enter={{
        opacity: 1,
        transform: "translateY(calc(50vh - 145px))"
      }}
      leave={{
        opacity: 0
      }}
      config={isFirstTime ? { delay: 300 } : config.default}
    >
      {showDescription =>
        showDescription &&
        (props => (
          <Div style={props} className={styles.user_description_container}>
            <div className={styles.user_description}>
              <b className={styles.name}>Chris Rentsch</b>
            </div>
            <Div row justify align className={styles.user_button_container}>
			<br/>
              <Div
                align
                className={styles.user_button}
                onClick={onClickProject}
              >
                PROJECTS
                <Underline isFirstTime={isFirstTime} />
              </Div>


              <Div
                align
                className={styles.user_button}
                onClick={onClickTimeline}
              >
                ABOUT
                <Underline isFirstTime={isFirstTime} />
              </Div>
              
            </Div>
            <ContactComponent className={styles.contact_container} />
          </Div>
        ))
      }
    </Transition>
  );
};

const Underline = ({ isFirstTime }) => (
  <Transition
    items={true}
    from={{
      transform: isFirstTime ? "scale(0)" : "scale(1)"
    }}
    enter={{
      transform: "scale(1)"
    }}
    config={{ delay: 800 }}
  >
    {showUnderline =>
      (props => (
        <div
          style={props}
          className={`${styles.underline} ${styles.show_underline}`}
        ></div>
      ))
    }
  </Transition>
);


export default memo(HeaderDescription);
