import React from "react";
import classes from "../../styles/Answer.module.css";
import Checkboox from "./Checkboox";
const Answer = () => {
  return (
    <div className={classes.answers}>
      <Checkboox className={classes.answer} text="test answer"></Checkboox>
    </div>
  );
};

export default Answer;
