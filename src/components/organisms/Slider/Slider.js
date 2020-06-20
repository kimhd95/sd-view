import React from "react";
import { SliderContent } from "../../molecules/Slider/SliderContent";

export default function Slider() {
  /**
   * @todo
   * 섬 대표메뉴 리스트 가져오기
   * imgPath, subTitle, title
   */
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

  return <SliderContent children={arr} />;
}
