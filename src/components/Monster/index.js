import React, { useState } from "react";

import styles from "./styles/Monster.module.css";

function Monster({ monster, colonyPost }) {
  function handleClick() {
    const monsterobj = {
      name: monster.name,
      image: monster.image,
      docile: monster.docile,
    };

    colonyPost(monsterobj);
  }
  return (
    <div className={styles["monster-container"]}>
      {/* // dangerouslySetInnerHTML={{ __html: monster }} */}
      <img className={styles.monsterimg} src={monster.image} />
      <p>
        <button onClick={handleClick}> Add To Colony</button>
      </p>
    </div>
  );
}

export default Monster;
