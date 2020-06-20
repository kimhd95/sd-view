import React from "react";
import { Link } from "react-router-dom";
import { ICO12 } from "../../atom/Icon/Icon";
import { SmallThumb } from "../../atom/Image/Image";
import { TXT12, TXT16 } from "../../atom/Text/Text";
import "./ListContent.scss";

export const ListContent = ({ to, src, title, loc, menu, ...props }) => {
  return (
    <div className="list_content">
      <Link {...props} to={to}>
        <div className="left">
          <SmallThumb src={src} />
        </div>
        <div className="right">
          <TXT16 children={title} />
          <div>
            <ICO12 src="/img/ico_loc.png" />
            <TXT12 className="inline" children={loc} />
          </div>
          <TXT12 className="gray" children={menu} />
        </div>
      </Link>
    </div>
  );
};
