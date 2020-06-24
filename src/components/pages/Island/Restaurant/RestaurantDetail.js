import React from "react";
import Header from "../../../molecules/Common/Header";
import TopNavigation from "../../../organisms/Navigation/TopNavigation";
import SliderWithTitle from "../../../organisms/Slider/SliderWithTitle";
import ListWithTitle from "../../../organisms/List/ListWithTitle";

// import "./Restaurant.scss";
import Fraction from "../../../organisms/Fraction/FractionWithDetail";

export default function Restaurant() {
  return (
    <>
      <Header title="치킨왕 톤키톤키" />
      <Fraction />
    </>
  );
}
