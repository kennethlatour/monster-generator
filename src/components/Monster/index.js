import React, {useState} from "react";

import styles from "./styles/Monster.module.css";

function Monster({ monster, colonyPost }) {
  const [newMonster, setnewMonster] = useState([])
  function handleClick () {
    const monsterobj = {
      "name": monster.name,
      "image": monster.image
    }
    setnewMonster(monsterobj)
    colonyPost(newMonster)
  }
  return (
    <div className={styles["monster-container"]} >
      {/* // dangerouslySetInnerHTML={{ __html: monster }} */}
     <img src = {monster.image} /> 
     <p>
      <button onClick = {handleClick}> Add To Colony</button>
    </p>
      </div>
  );
}

export default Monster;
