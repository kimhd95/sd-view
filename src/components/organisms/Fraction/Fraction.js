import React from "react";
import Swiper from "react-id-swiper";
import { FractionContents } from "../../molecules/FractionContents/FractionContents";

export default function Fraction(props) {
  const imgArr = [
    { src: "/img/chicken.png" },
    { src: "/img/chicken.png" },
    { src: "/img/chicken.png" },
    { src: "/img/chicken.png" },
    { src: "/img/chicken.png" },
    { src: "/img/chicken.png" },
    { src: "/img/chicken.png" },
    { src: "/img/chicken.png" },
    { src: "/img/chicken.png" },
    { src: "/img/chicken.png" },
    { src: "/img/chicken.png" },
    { src: "/img/chicken.png" },
  ];

  const params = {
    pagination: {
      el: ".swiper-pagination.fraction_thumb",
      type: "fraction",
    },
  };

  return (
    <Swiper {...params}>
      {imgArr.map((e, index) => {
        return <FractionContents key={index} src={e.src} />;
      })}
    </Swiper>
  );
}
