import React from "react";
import { getRandomInt } from "../../utils/random";

import styles from "./styles/GenerateButton.module.css";

const GenerateButton = ({ setRandomNumber }) => {
  function handleClick(e) {
    setRandomNumber(getRandomInt(1, 2147483647));
  }

  return (
    <button className={styles.button} onClick={handleClick}>
      Generate Monster
    </button>
  );
};

export default GenerateButton;
