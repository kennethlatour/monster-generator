import React, { useState } from "react";

function MyMonster({ monster, exile }) {
  function handleClick() {
    window.location.reload();
    const exileMonster = monster.id;
    exile(exileMonster);
  }
  //   function updateKids (){
  //     let newCount = parseInt(setKidAmount(kidAmount + 1))
  //     const newAmount = {"children": newCount}

  //          fetch(`http://localhost:8000/Colony/${monster.id}`, {
  //            method: 'PATCH',
  //            headers: {
  //              'Content-Type': 'application/json',
  //            },
  //            body: JSON.stringify(newAmount),
  //          })
  //             // .then(res => res.json())
  //             // .then(data => updateColonyAmount(data))
  //        }
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
    <div>
      <div className="image">
        <img src={monster.image} />
      </div>
      <div> {monster.name}</div>
      <div> </div>
      <div>
        <button onClick={docile}>
          {" "}
          {stateDocile ? "Docile" : "Aggressive"}{" "}
        </button>
        <button onClick={handleClick}> Exile </button>
      </div>
    </div>
  );
}

export default MyMonster;
