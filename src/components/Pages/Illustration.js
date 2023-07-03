import React from "react";
import image from "../../assets/images/signup.svg";
import classes from "../../styles/Illustration.module.css";
const Illustration = () => {
  return (
    <div>
      <div className={classes.illustration}>
        <img src={image} alt="Signup" />
      </div>
    </div>
  );
};

export default Illustration;
