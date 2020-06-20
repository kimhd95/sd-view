import React from "react";
import Swiper from "react-id-swiper";
import { Link } from "react-router-dom";
import { LargeThumb } from "../../atom/Image/Image";
import { SubTitle, SmallTitle } from "../../atom/Text/Text";
import "./SliderContent.scss";

export const SliderContent = ({ children, to }) => {
  const params = {
    slidesPerView: "auto",
    spaceBetween: 20,
  };

  return (
    <Swiper {...params}>
      {children.map((e, index) => {
        return (
          <Link className="slider_content" to={e.to} key={index}>
            <LargeThumb src={e.src} />
            <SubTitle children={e.sub} />
            <SmallTitle children={e.title} />
          </Link>
        );
      })}
    </Swiper>
  );
};
