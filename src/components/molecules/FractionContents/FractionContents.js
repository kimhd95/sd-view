import React from "react";
import Swiper from "react-id-swiper";
import { BigThumb } from "../../atom/Image/Image";
import "./FractionContents.scss";

export const FractionContents = ({ src, key, ...props }) => {
  return (
    <div className={props.className} key={key}>
      <BigThumb src={src} />
    </div>
  );
};
