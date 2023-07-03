import React from "react";
import classes from "../../styles/Question.module.css";
import Answar from "./Answar";
const Question = () => {
  return (
    <div class={classes.question}>
      <div class={classes.qtitle}>
        <span class="material-icons-outlined"> help_outline </span>
        Here goes the question from Learn with Sumit?
      </div>
      <Answar></Answar>
    </div>
  );
};

export default Question;
