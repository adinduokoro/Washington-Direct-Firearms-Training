import React from "react";
import styles from "./Layout.module.css";
import { Header } from "../../components";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="">
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.outlet}>
        <Outlet />
        {/* Footer */}
      </div>
    </div>
  );
};

export default Layout;
