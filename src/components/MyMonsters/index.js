import React, { useState } from "react";
import styles from "./styles/MyMonster.module.css";

function MyMonster({ monster, exile }) {
  function handleClick() {
    window.location.reload();
    const exileMonster = monster.id;
    exile(exileMonster);
  }

  const [stateDocile, setDocile] = useState(!monster.docile);

  function docile() {
    setDocile(!stateDocile);

    let newChange = {
      docile: stateDocile,
    };
    fetch(`http://localhost:8000/Colony/${monster.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newChange),
    });
    //  .then (res => res.json())
    //  .then(data => updateManner(data))
  }

  return (
    <div className={styles.container}>
      <img src={monster.image} />
      <div className={styles.info}>
        <p>{monster.name}</p>
        <button onClick={docile}>
          {stateDocile ? "Docile" : "Aggressive"}{" "}
        </button>
        <button onClick={handleClick}> Exile </button>
      </div>
    </div>
  );
}

export default MyMonster;
