import React, { useState, useEffect } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Monster from "./components/Monster";
import MonsterColony from "./components/MonsterColony";
import GenerateButton from "./components/GenerateButton";
import { Switch, Route} from "react-router-dom";
import "./styles/global.css";

function App() {
  const [monster, setMonster] = useState([]);
  const [randomNumber, setRandomNumber] = useState(1);
  const [colony, setColony] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/monsters/${randomNumber}`)
      .then((res) => res.json())
      .then((data) => setMonster(data));
  }, [randomNumber]);

  useEffect(() => {
    fetch(`http://localhost:8000/Colony`)
      .then((res) => res.json())
      .then((data) => setColony(data));
  }, []);

  function colonyPost(newMonster) {
    fetch("http://localhost:8000/Colony", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMonster),
    }).then(setColony([...colony, newMonster]));
  }

  function exile(exileMonster) {
    fetch(`http://localhost:8000/Colony/${exileMonster}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <div className="container">
      <Navbar />
      <Switch>
        <Route exact path="/monster">
          <Monster monster={monster} colonyPost={colonyPost} />
          <GenerateButton setRandomNumber={setRandomNumber} />
        </Route>
        <Route exact path="/colony">
          <MonsterColony colony={colony} exile={exile} />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
