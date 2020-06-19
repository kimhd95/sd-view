import React from "react";
import MenuTabs from "../../molecules/Tabs/MenuTabs";

export default function Header() {
  return (
    <MenuTabs
      children={[
        {
          to: "/information",
          children: "종합정보",
        },
        {
          to: "/ferry",
          children: "배편",
        },
        {
          to: "/accommodation",
          children: "숙소",
        },
        {
          to: "/",
          children: "식당",
        },
      ]}
    />
  );
}
