import React from "react";
import styles from "./styles/About.module.css";

function About() {
  return (
    <div className={styles.aboutPage}>
      <h1>About</h1>
      Welcome to our monster generator, future colony leader! With a few simple
      clicks, we use an auto-generated server to give you a completely random
      and new monster. Find a monster that is your favorite and then you can
      begin building your personalized colony of creatures! You get to choose if
      your creatures are friendly, docile beings or if they're aggressive
      beasts. If your monster isn't getting along with your other colony
      residents, you can exile them back into space. We hope you enjoy building
      out your own interstellar world.
    </div>
  );
}

export default About;
