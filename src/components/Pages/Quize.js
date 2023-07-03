import React from "react";
import Answer from "./Answer";
import Miniplayer from "./Miniplayer";
import ProgressBar from "./ProgressBar";
const Quize = () => {
  return (
    <div>
      <h1>Pick three of your favorite Star Wars Flims</h1>
      <h4>Question can have multiple answers</h4>
      <Answer></Answer>
      <ProgressBar></ProgressBar>
      <Miniplayer></Miniplayer>
    </div>
  );
};

export default Quize;
