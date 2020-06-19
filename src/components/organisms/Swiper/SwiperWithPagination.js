import React from "react";
import * as IMG from "../../atom/Image/Image";
import * as Swiper from "../../../libs/Swiper";

function getBannerImg() {
  const bannerList = [
    {
      image: <IMG.MainBanner src="/img/swiper_sample_1.png" />,
    },
    {
      image: <IMG.MainBanner src="/img/swiper_sample_2.png" />,
    },
  ];

  return bannerList;
}

export default function Pagination() {
  const bannerList = getBannerImg();
  return <Swiper.SimpleSwiperWithPagination children={bannerList} />;
}
