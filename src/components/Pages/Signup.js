import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "../../styles/Form.module.css";
import { AuthContex } from "../AuthProvider";
import Textinput from "../Textinput";
import Button from "./Button";
import Checkboox from "./Checkboox";
import Form from "./Form";
import Illustration from "./Illustration";
const Signup = () => {
  const { signIn } = useContext(AuthContex);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration />
        <Form className={`${classes.signup}`} onSubmit={handleSubmit}>
          <Textinput
            type="text"
            placeholder="Enter your name"
            icon="person"
          ></Textinput>
          <Textinput
            type="email"
            name="email"
            placeholder="Enter your email"
            icon="email"
          ></Textinput>
          <Textinput
            type="password"
            name="password"
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
          <Button>
            <input type="submit" value="submit" />
          </Button>
          <div className="info ">
            Already have an account? <Link to="/login">Login</Link> instead.
          </div>
        </Form>
      </div>
    </>
  );
};

export default Signup;
