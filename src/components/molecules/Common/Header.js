import React from "react";
import { BackImg } from "../../atom/Image/Image";
import { TXT22B } from "../../atom/Text/Text";
import "./Header.scss";

export default function Header(props) {
  return (
    <header>
      <div>
        <BackImg src="/img/back.png" />
        <TXT22B className="header_title" children={props.title} />
      </div>
    </header>
  );
}
