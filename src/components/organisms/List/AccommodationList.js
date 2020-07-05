import React from "react";
import { AccommodationListContent } from "../../molecules/ListContents/AccommodationListContent";
import { GetAxios } from "../../../libs/Axios";


export default function List(props) {
  /**
   * 섬에 걸려있는 숙소 리스트 가져오기
   * link, imgPath, accommodationType, title, loc, minPrice
   */
  

  GetAxios("get_accomodation_list_by_island_id", "B", { id: "0101i" }).then(rtn=>{
    let arr = [];

    if(rtn.data.success){
      for(var i=0; i<rtn.data.data.length; i++){
        arr.push(rtn.data.data[i]);
      }
    }
    return (
      <>
        {arr.map((e, index) => {
        return (
          <AccommodationListContent
            key={index}
            to={e.to}
            src={e.image_path}
            title={e.name}
            loc={e.loc_info}
            accommodationType={e.type}
            minPrice={e.minPrice}
          />
        );
      })}
      </>
    );
  
  });

  const arr = [
    {
      to: "/",
      image_path: "/img/thumb3.png",
      type : "펜션",
      name: "장봉도 해비치 호텔 & 리조트 오후엔펜션",
      loc: "장봉도항 차량 10분",
      minPrice : "113,800",
    },
    {
      to: "/",
      image_path: "/img/thumb3.png",
      type : "펜션",
      name: "장봉도 해비치 호텔 & 리조트 오후엔펜션",
      loc: "장봉도항 차량 10분",
      minPrice : "113,800",
    },
    {
      to: "/",
      image_path: "/img/thumb3.png",
      type : "펜션",
      name: "장봉도 해비치 호텔 & 리조트 오후엔펜션",
      loc: "장봉도항 차량 10분",
      minPrice : "113,800",
    },
    {
      to: "/",
      image_path: "/img/thumb3.png",
      type : "펜션",
      name: "장봉도 해비치 호텔 & 리조트 오후엔펜션",
      loc: "장봉도항 차량 10분",
      minPrice : "113,800",
    },
  ];

  return (
    <>
      {arr.map((e, index) => {
      return (
        <AccommodationListContent
          key={index}
          to={e.to}
          src={e.image_path}
          title={e.name}
          loc={e.loc_info}
          accommodationType={e.type}
          minPrice={e.minPrice}
        />
      );
    })}
    </>
  );
  
}
