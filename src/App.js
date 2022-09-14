import React, { useState, useEffect } from "react";
import PlanetCollection from "./components/PlanetCollection";
import Navbar from "./components/Navbar";
import Monster from "./components/Monster";
import GenerateButton from "./components/GenerateButton";

import "./styles/global.css";

function App() {
  const [monster, setMonster] = useState([]);
  const [randomNumber, setRandomNumber] = useState(1);

  useEffect(() => {
    fetch("https://course-search-proxy.herokuapp.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        urlToGet: `https://app.pixelencounter.com/api/basic/monsters/${randomNumber}/?size=200`,
      }),
    })
      .then((res) => res.text())
      .then((data) => {
        setMonster(data);
      })
      .catch(console.error);
  }, [randomNumber]);

  return (
    <div className="container">
      <Monster monster={monster} />
      <PlanetCollection />
      <Navbar />
      <GenerateButton setRandomNumber={setRandomNumber} />
    </div>
  );
}

export default App;
