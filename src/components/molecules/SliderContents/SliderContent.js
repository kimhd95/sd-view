import React from "react";
import { Link } from "react-router-dom";
import { LargeThumb } from "../../atom/Image/Image";
import { TXT12, TXT14 } from "../../atom/Text/Text";
import "./SliderContent.scss";

export const SliderContent = ({ to, src, sub, title, ...props }) => {
  return (
    <Link
      {...props}
      className={"slider_content_anchor " + props.className}
      to={to}
    >
      <LargeThumb src={src} />
      <TXT12 className="gray" children={sub} />
      <TXT14 children={title} />
    </Link>
  );
};
