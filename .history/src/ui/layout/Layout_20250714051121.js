import React from "react";
import styles from "./Layout.module.css";
import { Header } from "../../components";

const Layout = () => {
  return (
    <div>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.outlet}>
        Outlet
        {/* Footer */}
      </div>
    </div>
  );
};

export default Layout;
