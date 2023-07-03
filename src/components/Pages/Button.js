import React from "react";
import classes from "../../styles/Button.module.css";
const Button = ({ text, ...rest }) => {
  return (
    <div className={classes.button}>
      <span>{text}</span>
    </div>
  );
};

export default Button;
