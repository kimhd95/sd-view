import React from "react";
import { ListContent } from "../../molecules/ListContents/ListContent";

export default function List(props) {
  /**
   * @todo
   * 섬 맛집 리스트 가져오기
   * link, imgPath, title, loc, menu
   */

  const arr = [
    {
      to: "/",
      src: "/img/thumb2.png",
      title: "치킨왕 톤키톤키",
      loc: "한들해변 도보 5분",
      menu: "디럭스풀콤보하이퍼버거 6,700원",
    },
    {
      to: "/",
      src: "/img/thumb2.png",
      title: "치킨왕 톤키톤키",
      loc: "한들해변 도보 5분",
      menu: "디럭스풀콤보하이퍼버거 6,700원",
    },
    {
      to: "/",
      src: "/img/thumb2.png",
      title: "치킨왕 톤키톤키",
      loc: "한들해변 도보 5분",
      menu: "디럭스풀콤보하이퍼버거 6,700원",
    },
    {
      to: "/",
      src: "/img/thumb2.png",
      title: "치킨왕 톤키톤키",
      loc: "한들해변 도보 5분",
      menu: "디럭스풀콤보하이퍼버거 6,700원",
    },
  ];

  return (
    <>
      {arr.map((e, index) => {
        return (
          <ListContent
            key={index}
            to={e.to}
            src={e.src}
            title={e.title}
            loc={e.loc}
            menu={e.menu}
          />
        );
      })}
    </>
  );
}
