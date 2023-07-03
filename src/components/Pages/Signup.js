import React from "react";
import classes from "../../styles/Form.module.css";
import Textinput from "../Textinput";
import Button from "./Button";
import Checkboox from "./Checkboox";
import Form from "./Form";
import Illustration from "./Illustration";
const Signup = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration />
        <Form className={`${classes.signup}`}>
          <Textinput
            type="text"
            placeholder="Enter your name"
            icon="person"
          ></Textinput>
          <Textinput
            type="email"
            placeholder="Enter your email"
            icon="email"
          ></Textinput>
          <Textinput
            type="password"
            placeholder="Enter your password"
            icon="lock"
          ></Textinput>
          <Textinput
            type="password"
            placeholder="confirm password"
            icon="lock"
          ></Textinput>
          <Checkboox
            text="I agree to the Terms &amp; Conditions"
            type="checkbox"
          ></Checkboox>
          <Button text="submit now"></Button>
          <div className="info">
            Already have an account? <a href="login.html">Login</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
};

export default Signup;
