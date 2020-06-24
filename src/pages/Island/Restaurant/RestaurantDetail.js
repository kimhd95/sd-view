import React from "react";
import Header from "../../../components/molecules/Common/Header";
import TopNavigation from "../../../components/organisms/Navigation/TopNavigation";
import SliderWithTitle from "../../../components/organisms/Slider/SliderWithTitle";
import ListWithTitle from "../../../components/organisms/List/ListWithTitle";

// import "./Restaurant.scss";
import { Fraction } from "../../../components/molecules/Fraction/Fraction";

export default function Restaurant() {
  return (
    <>
      <Header title="치킨왕 톤키톤키" />
      <Fraction />
    </>
  );
}
