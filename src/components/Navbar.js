import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <button style={{ padding: "10px" }}>
        <Link style={{ textDecoration: "none" }} to="/monster">
          Monster Randomizer
        </Link>
      </button>

      <button style={{ padding: "10px" }}>
        <Link style={{ textDecoration: "none" }} to="/colony">
          Colony
        </Link>
      </button>

      <button style={{ padding: "10px" }}>
        <Link style={{ textDecoration: "none" }} to="/about">
          About
        </Link>
      </button>
    </div>
  );
}

export default Navbar;
