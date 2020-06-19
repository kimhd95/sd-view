import React from "react";
import * as Text from "../../../atom/Text/Text";
import * as Swiper from "../../../molecules/Swiper/Swiper";

export default function Menu() {
  return (
    <>
      <Text.Title children="장봉도 대표 메뉴" />
      <Swiper.SwiperSlider
        children={[
          {
            to: "/",
            src: "/img/swiper_sample_1.png",
            alt: "",
            title: "소라비빔밥",
            desc: "싱싱한 소라와 함께 느끼는 새콤달콤함 더 늘어나나?",
          },
          {
            to: "/",
            src: "/img/swiper_sample_2.png",
            alt: "",
            title: "장봉도 오후엔팬션",
            desc: "장봉도항 차량 10분",
          },
          {
            to: "/",
            src: "/img/swiper_sample_1.png",
            alt: "",
            title: "추억과 낭만이 있는 풍경",
            desc: "덕적도",
          },
        ]}
      />
    </>
  );
}

// "추억과 낭만이 있는 풍경"
// "덕적도"
