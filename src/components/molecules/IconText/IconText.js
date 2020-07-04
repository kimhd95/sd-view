import React from "react";
import { ICO12, ICO20 } from "../../atom/Icon/Icon";
import { TXT12, TXT14 } from "../../atom/Text/Text";
import "./IconText.js";

export const IconText12 = ({ src, children }) => {
  return (
    <div>
      <ICO12 src={src} />
      <TXT12 className="inline" children={children} />
    </div>
  );
};

export const IconText20 = ({ src, children }) => {
  return (
    <div>
      <ICO20 src={src} />
      <TXT14 className="inline" children={children} />
    </div>
  );
};
