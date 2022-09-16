import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <button>
        <Link to="/monster">Monster Randomizer</Link>
      </button>

      <button>
        <Link to="/colony">Colony</Link>
      </button>

      <button>
        <Link to="/about">About</Link>
      </button>
    </div>
  );
}

export default Navbar;
