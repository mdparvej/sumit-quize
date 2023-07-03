import React from "react";
import { Outlet } from "react-router-dom";
import classes from "../styles/Layout.module.css";
const Layout = ({ children }) => {
  return (
    <>
      <Outlet></Outlet>
      <main className={classes.main}>
        <div className={classes.container}>{children}</div>
      </main>
    </>
  );
};

export default Layout;
