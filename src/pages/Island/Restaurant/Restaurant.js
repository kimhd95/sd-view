import React, { useEffect, useState } from "react";
import Header from "../../../components/molecules/Common/Header";
import TopNavigation from "../../../components/organisms/Navigation/TopNavigation";
import SliderWithTitle from "../../../components/organisms/Slider/SliderWithTitle";
import ListWithTitle from "../../../components/organisms/List/ListWithTitle";
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
