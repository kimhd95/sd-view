import React from "react";
import Swiper from "react-id-swiper";
import { SliderContent } from "../../molecules/SliderContents/SliderContent";

export default function Slider(props) {
  /**
   * @todo
   * 섬 대표메뉴 리스트 가져오기
   * imgPath, subTitle, title
   */

  const swiperParams = {
    slidesPerView: "auto",
    spaceBetween: 20,
  };

  const arr = [
    {
      to: "/",
      src: "/img/thumb1.png",
      sub: "육해공이 만난 그 찜닭",
      title: "장봉추찜닭",
    },
    {
      to: "/",
      src: "/img/thumb1.png",
      sub: "모찌모찌앙기모찌",
      title: "구워먹는떡모찌",
    },
    {
      to: "/",
      src: "/img/thumb1.png",
      sub: "육해공이 만난 그 찜닭",
      title: "장봉추찜닭",
    },
    {
      to: "/",
      src: "/img/thumb1.png",
      sub: "모찌모찌앙기모찌",
      title: "구워먹는떡모찌",
    },
  ];

  return (
    <Swiper {...swiperParams}>
      {arr.map((e, index) => {
        return (
          <SliderContent
            key={index}
            to={e.to}
            src={e.src}
            sub={e.sub}
            title={e.title}
          />
        );
      })}
    </Swiper>
  );
}
