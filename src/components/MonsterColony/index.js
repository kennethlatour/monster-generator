import React from "react";
import MyMonsters from "../MyMonsters/index.js";
import Slider from "react-slick";
import styles from "./styles/MonsterColony.module.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerPadding: true,
  arrows: true,
};

function MonsterColony({ colony, exile }) {
  return (
    <div className={styles.colony}>
      <Slider {...settings}>
        {colony.map((monster) => {
          return (
            <MyMonsters key={monster.id} monster={monster} exile={exile} />
          );
        })}
      </Slider>
    </div>
  );
}

export default MonsterColony;
