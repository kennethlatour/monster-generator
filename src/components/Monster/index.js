import React, { useState } from "react";
import planet from "../../assets/planetIcon2.png";
import { Modal } from "../Modal";
import styles from "./styles/Monster.module.css";

function Monster({ monster, colonyPost }) {
  const [showModal, setShowModal] = useState(false);
  function handleClick() {
    const monsterobj = {
      name: monster.name,
      image: monster.image,
      docile: monster.docile,
    };

    colonyPost(monsterobj);
    setShowModal(true);
  }

  return (
    <div className={styles["monster-container"]}>
      <Modal onComplete={() => setShowModal(false)} visible={showModal}>
        Monster Added
      </Modal>
      <img className={styles.monsterimg} src={monster.image} alt= "monster style"/>
      <p>
        <button className={styles.colonyBtn} onClick={handleClick}>
          Add To Colony <img src={planet} alt = "planets"/>
        </button>
      </p>
    </div>
  );
}

export default Monster;
