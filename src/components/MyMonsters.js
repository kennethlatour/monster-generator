import React from "react";

function MyMonster({monster, exile}) {
  function handleClick () {
    const exileMonster = monster.id
    exile(exileMonster)
  }
  return <div>
  <div className="image">
    <img src = {monster.image} />
  </div>
    <div>  {monster.name}</div>
    <div>  
        <button onClick = {handleClick}> Exile </button>
     </div>
</div>;
}

export default MyMonster;