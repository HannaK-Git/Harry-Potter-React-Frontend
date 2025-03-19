import React from "react";
import { Link } from "react-router-dom";

import styles from "./cover.module.css";
import MaraudersMap from "../MaraudersMap";

const CoverPage = () => {
  return (
    <div className={styles.mainD}>
      <div className={styles.img}>
        {/* 
          We'll give MaraudersMap a class so we can apply `.mapCanvas` 
          (the absolutely positioned styling). 
        */}
        <div className={styles.mapCanvas}>
          <MaraudersMap />
        </div>

        {/* Link absolutely positioned at the bottom */}
        <Link className={styles.linkCov} to="/home">
          Let's Begin the Journey
        </Link>
      </div>
    </div>
  );
};

export default CoverPage;
