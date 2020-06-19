import React from "react";
import { useLocation } from "react-router-dom";
import * as MenuTab from "../../atom/Tab/MenuTab";
import "./MenuTabs.scss";

export default function MenuTabs({ children = "" }) {
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <ul className="menuTabUl">
      {children.map((e, index) => {
        let active = false;
        if (pathName.includes(e.to)) active = true;
        return (
          <li key={index}>
            {
              <MenuTab.ActiveTab
                className={active ? "menuTab active" : "menuTab"}
                to={e.to}
                children={e.children}
              />
            }
          </li>
        );
      })}
    </ul>
  );
}
