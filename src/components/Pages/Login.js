import React from "react";
import classes from "../../styles/Form.module.css";
import Textinput from "../Textinput";
import Button from "./Button";
import Form from "./Form";
import Illustration from "./Illustration";
const Login = () => {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration />
        <Form className={`${classes.signup}`}>
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
          <Button text="submit now"></Button>
          <div className="info ">
            Don't have an account ? <a href="login.html">Signup</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
};

export default Login;
