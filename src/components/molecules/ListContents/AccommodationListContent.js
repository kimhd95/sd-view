import React from "react";
import { Link } from "react-router-dom";
import { ICO12 } from "../../atom/Icon/Icon";
import { AccommodationThumb } from "../../atom/Image/Image";
import { TXT14, TXT18M } from "../../atom/Text/Text";
import "./AccommodationListContent.scss";

export const AccommodationListContent = ({ to, src, title, loc, accommodationType, minPrice, ...props }) => {
  return (
    <div class="acco_content">
      <Link {...props} to={to}><AccommodationThumb src={src} /></Link>
      <div class="acco_info"> 
        <TXT14 className="blue" children={accommodationType} />
        <Link {...props} to={to}><TXT18M children={title} /></Link>
        <div>
          <ICO12 src="/img/ico_loc.png" />
          <TXT14 className="inline" children={loc} />
        </div>
        <TXT18M children={minPrice+"원~"} />
      </div>
    </div>
  );
};
