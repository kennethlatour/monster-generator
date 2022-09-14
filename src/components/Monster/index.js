import React from "react";

import styles from "./styles/Monster.module.css";

function Monster({ monster }) {
  return (
    <div
      className={styles["monster-container"]}
      dangerouslySetInnerHTML={{ __html: monster }}
    ></div>
  );
}

export default Monster;
