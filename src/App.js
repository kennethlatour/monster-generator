import React, { useState, useEffect } from "react";
import PlanetCollection from "./components/PlanetCollection";
import Navbar from "./components/Navbar";
import Monster from "./components/Monster";
import MonsterColony from "./components/MonsterColony";
import GenerateButton from "./components/GenerateButton";

import "./styles/global.css";

function App() {
  const [monster, setMonster] = useState([]);
  const [randomNumber, setRandomNumber] = useState(1);
  const [colony, setColony] = useState([])
  // useEffect(() => {
  //   fetch("https://course-search-proxy.herokuapp.com/", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //     body: JSON.stringify({
  //       urlToGet: `https://app.pixelencounter.com/api/basic/monsters/${randomNumber}/?size=200`,
  //     }),
  //   })
  //     .then((res) => res.text())
  //     .then((data) => {
  //       setMonster(data);
  //     })
  //     .catch(console.error);
  // }, [randomNumber]);

  useEffect(() => {
    fetch(`http://localhost:3000/monsters/${randomNumber}`)
      .then (res => res.json())
      .then (data => setMonster(data))
  
  }, [randomNumber]);

  useEffect(() => {
    fetch(`http://localhost:3000/Colony`)
      .then (res => res.json())
      .then (data => setColony(data))
  
  }, []);

  function colonyPost (newMonster) {
    fetch("http://localhost:3000/Colony", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMonster),
    }).then(setColony([...colony, newMonster]))
  }
  
  
   function exile (exileMonster) {
    fetch(`http://localhost:3000/Colony/${exileMonster}`, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
      }
    })
  }

  return (
    <div className="container">
      
      <Monster monster={monster} colonyPost = {colonyPost} />
      <PlanetCollection />
      <Navbar />
      <GenerateButton setRandomNumber={setRandomNumber} />
      <MonsterColony colony = {colony} exile = {exile} />
    </div>
  );
}

export default App;
