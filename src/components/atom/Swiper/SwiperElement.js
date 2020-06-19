import React from "react";
import "./SwiperElement.scss";

export const SliderTitle = ({ children = "", ...props }) => {
  return <p className="sliderTitle" {...props} children={children} />;
};

export const SliderDesc = ({ children = "", ...props }) => {
  return <p className="sliderDesc" {...props} children={children} />;
};
