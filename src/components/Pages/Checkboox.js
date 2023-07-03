import React from "react";

const Checkboox = ({ text, ...rest }) => {
  return (
    <label>
      <input {...rest} />
      <span>{text}</span>
    </label>
  );
};

export default Checkboox;
