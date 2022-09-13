import React from "react";
import MonsterCollection from "./MonsterCollection";
import PlanetCollection from "./PlanetCollection";
import Navbar from "./Navbar";

function App() {
    return (
      <div>
         <Navbar />
        <span>
            <MonsterCollection />
        </span>
        <span>
            <PlanetCollection />
        </span>
      </div>
        
    );
  }

  export default App;