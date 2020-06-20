import React from "react";
import List from "./List";
import { TXT20M } from "../../atom/Text/Text";
import "./List.scss";

export default function ListWithTitle() {
  return (
    <div className="organism">
      <TXT20M className="list_title" children="장봉도 맛집 둘러보기" />
      <List />
    </div>
  );
}
