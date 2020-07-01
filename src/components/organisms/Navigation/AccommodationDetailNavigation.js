import React from "react";
import { useHistory } from "react-router-dom";
import { TopNavContents } from "../../molecules/NavContents/NavContens";
import "./AccommodationDetailNavigation.scss";

export default function AccommodationDetailNavigation(props) {
  const history = useHistory();
  const pathName = history.location.pathname;

  const arr = [
    { to: "/all", children: "전체" },
    { to: "/pension", children: "펜션" },
    { to: "/bnb", children: "민박" },
    { to: "/guestHouse", children: "게하" },
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
