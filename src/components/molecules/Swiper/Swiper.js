import React from "react";
import Swiper from "react-id-swiper";
import { Link } from "react-router-dom";
import * as SwiperElement from "../../atom/Swiper/SwiperElement";
import "./Swiper.scss";

export const SwiperSlider = ({ children = "" }) => {
  const params = {
    slidesPerView: 2,
  };

  return (
    <div className="slideCover">
      <Swiper {...params}>
        {children.map((e, index) => {
          return (
            <div key={index}>
              <Link
                to={e.to}
                children={<img className="slideImg" src={e.src} alt={e.alt} />}
              />
              <SwiperElement.SliderTitle children={e.title} />
              <SwiperElement.SliderDesc children={e.desc} />
            </div>
          );
        })}
      </Swiper>
    </div>
  );
};

export const SimpleSwiperWithPagination = ({ children }) => {
  const params = {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };
  return (
    <div className="main_slide">
      <Swiper {...params}>
        {children.map((list, index) => {
          return (
            <div key={index}>
              <a href={list.href}>{list.image}</a>
            </div>
          );
        })}
      </Swiper>
    </div>
  );
};
