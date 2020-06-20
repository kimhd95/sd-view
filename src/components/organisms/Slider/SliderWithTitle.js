import React from "react";
import Slider from "./Slider";
import { TXT20M } from "../../atom/Text/Text";
import "./Slider.scss";

export default function SliderWithTitle() {
  return (
    <div className="organism">
      <TXT20M className="slider_title" children="장봉도 대표메뉴" />
      <Slider />
    </div>
  );
}
