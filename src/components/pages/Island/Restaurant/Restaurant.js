import React, { useEffect, useState } from "react";
import Header from "../../../molecules/Common/Header";
import TopNavigation from "../../../organisms/Navigation/TopNavigation";
import SliderWithTitle from "../../../organisms/Slider/SliderWithTitle";
import ListWithTitle from "../../../organisms/List/ListWithTitle";
import "./Restaurant.scss";

export default function Restaurant() {
  return (
    <>
      <Header title="장봉도" />
      <TopNavigation />
      <SliderWithTitle />
      <ListWithTitle />
    </>
  );
}
