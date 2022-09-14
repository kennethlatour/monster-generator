import React from "react";
import MyMonsters from "./MyMonsters"
function MonsterColony({colony, exile}) {
  return <div style={{alignSelf: 'flex-end'}}>
    {colony.map(monster => {
        return <MyMonsters key ={monster.id} monster = {monster} exile = {exile} />
      })}
  </div>;
}

export default MonsterColony;