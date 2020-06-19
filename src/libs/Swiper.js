import React from "react";
import Swiper from "react-id-swiper";
import "./Swiper.scss";

export const SimpleSwiperWithPerView = ({ children }) => {
  const params = {
    slidesPerView: 3,
    loop: true,
  };

  return (
    <div className="cover_slide">
      <div>
        <Swiper {...params}>
          {children.map((list, index) => {
            return (
              <div key={index}>
                <a href={list.href}>{list.image}</a>
                <p style={{ fontSize: "10px", color: "gray" }}>
                  추억과 낭만이 있는 풍경
                </p>
                <p style={{ fontSize: "12px" }}>덕적도</p>
              </div>
            );
          })}
        </Swiper>
      </div>
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
