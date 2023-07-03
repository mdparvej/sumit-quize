import React from "react";
import classes from "../../styles/Answer.module.css";
import Checkboox from "./Checkboox";
import Singleanswar from "./Singleanswar";
const Answar = () => {
  return (
    <div class={classes.answers}>
      <Singleanswar className={classes.answer} for="option1">
        A New Hope 1
      </Singleanswar>
      <Checkboox
        className={classes.answer}
        text="A New Hope 1"
        type="checkbox"
      ></Checkboox>
    </div>
  );
};

export default Answar;
