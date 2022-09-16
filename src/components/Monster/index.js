import React, { useState } from "react";
import planet from "../../assets/planetIcon2.png";
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
      <img className={styles.monsterimg} src={monster.image} />
      <p>
        <button className={styles.colonyBtn} onClick={handleClick}>
          {" "}
          Add To Colony <img src={planet} />
        </button>
      </p>
    </div>
  );
}

export default Monster;
