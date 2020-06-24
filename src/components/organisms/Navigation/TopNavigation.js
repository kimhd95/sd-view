import React from "react";
import { useHistory } from "react-router-dom";
import { TopNavContents } from "../../molecules/NavContents/NavContens";
import "./TopNavigation.scss";

export default function TopNavigation(props) {
  const history = useHistory();
  const pathName = history.location.pathname;

  const arr = [
    { to: "/infomation", children: "종합정보" },
    { to: "/ferry", children: "배편" },
    { to: "/acc", children: "숙소" },
    { to: "/restaurant", children: "식당" },
  ];

  return (
    <ul className="top_nav">
      {arr.map((e, index) => {
        return (
          <TopNavContents
            key={index}
            className={pathName.includes(e.to) ? "top_nav_active" : ""}
            to={e.to}
            children={e.children}
          />
        );
      })}
    </ul>
  );
}
