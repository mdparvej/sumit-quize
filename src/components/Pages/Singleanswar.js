import React from "react";

const Singleanswar = ({ children, classNaem, ...rest }) => {
  return (
    <label className={classNaem} {...rest}>
      {children}
    </label>
  );
};

export default Singleanswar;
