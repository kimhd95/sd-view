import React from "react";
import Header from "../../components/organisms/Search/Header";
import SliderWithTitle from "../../components/organisms/Slider/SliderWithTitle";
import ListWithTitle from "../../components/organisms/List/ListWithTitle";
import "./Restaurant.scss";

import List from "../../components/organisms/List/List";

export default function Restaurant() {
  return (
    <>
      <Header />
      <SliderWithTitle />
      <ListWithTitle />
    </>
  );
}
