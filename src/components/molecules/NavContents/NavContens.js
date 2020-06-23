import React from "react";
import { Link } from "react-router-dom";
import { TXT16 } from "../../atom/Text/Text";

export const TopNavContents = ({ to, children, ...props }) => {
  return (
    <li>
      <Link to={to} children={<TXT16 {...props} children={children} />} />
    </li>
  );
};
