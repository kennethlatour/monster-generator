import React, { useState, useEffect } from "react";
import MonsterCollection from "./components/MonsterCollection";
import PlanetCollection from "./components/PlanetCollection";
import Navbar from "./components/Navbar";

function App() {
  const [currentMonsters, setCurrentMonsters] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/monsters")
      .then((res) => res.json())
      .then((data) => setCurrentMonsters(data));
  }, []);

  return (
    <div>
      <MonsterCollection monsters={currentMonsters} />
      <PlanetCollection />
      <Navbar />
    </div>
  );
}

export default App;
