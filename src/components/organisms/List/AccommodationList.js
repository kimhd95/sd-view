import React from "react";
import { AccommodationListContent } from "../../molecules/ListContents/AccommodationListContent";
import { DatePickers } from "../../molecules/DatePicker/DatePickers";

export default function List(props) {
  /**
   * @todo
   * 섬에 걸려있는 숙소 리스트 가져오기
   * link, imgPath, accommodationType, title, loc, minPrice
   */

  const arr = [
    {
      to: "/",
      src: "/img/thumb3.png",
      accommodationType : "펜션",
      title: "장봉도 해비치 호텔 & 리조트 오후엔펜션",
      loc: "장봉도항 차량 10분",
      minPrice : "113,800",
    },
    {
      to: "/",
      src: "/img/thumb3.png",
      accommodationType : "펜션",
      title: "장봉도 해비치 호텔 & 리조트 오후엔펜션",
      loc: "장봉도항 차량 10분",
      minPrice : "113,800",
    },
    {
      to: "/",
      src: "/img/thumb3.png",
      accommodationType : "펜션",
      title: "장봉도 해비치 호텔 & 리조트 오후엔펜션",
      loc: "장봉도항 차량 10분",
      minPrice : "113,800",
    },
    {
      to: "/",
      src: "/img/thumb3.png",
      accommodationType : "펜션",
      title: "장봉도 해비치 호텔 & 리조트 오후엔펜션",
      loc: "장봉도항 차량 10분",
      minPrice : "113,800",
    },
  ];

  return (
    <>
      <DatePickers />
      {arr.map((e, index) => {
        return (
          <AccommodationListContent
            key={index}
            to={e.to}
            src={e.src}
            title={e.title}
            loc={e.loc}
            accommodationType={e.accommodationType}
            minPrice={e.minPrice}
          />
        );
      })}
    </>
  );
}
