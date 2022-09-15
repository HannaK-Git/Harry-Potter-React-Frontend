import React from "react";
import { Link } from "react-router-dom";

import styles from "./cover.module.css";

const CoverPage = () => {
  return (
    <div className={styles.mainD}>
      <div className={styles.img}>
        <Link className={styles.linkCov} to="/home">Let the Journey Begin</Link>
      </div>
    </div>
  );
};

export default CoverPage;
