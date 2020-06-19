import React from "react";
import * as IMG from "../../atom/Image/Image";
import * as Swiper from "../../../libs/Swiper";

function getImageList() {
  const imgList = [
    {
      image: <IMG.PerViewBanner src="/img/swiper_sample_1.png" />,
    },
    {
      image: <IMG.PerViewBanner src="/img/swiper_sample_2.png" />,
    },
    {
      image: <IMG.PerViewBanner src="/img/swiper_sample_1.png" />,
    },
    {
      image: <IMG.PerViewBanner src="/img/swiper_sample_2.png" />,
    },
    {
      image: <IMG.PerViewBanner src="/img/swiper_sample_1.png" />,
    },
    {
      image: <IMG.PerViewBanner src="/img/swiper_sample_2.png" />,
    },
  ];

  return imgList;
}

export default function Pagination() {
  const imgList = getImageList();
  return <Swiper.SimpleSwiperWithPerView children={imgList} />;
}
