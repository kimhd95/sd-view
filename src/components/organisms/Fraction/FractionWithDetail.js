import React from "react";
import { TXT22B, TXT14, TXT12 } from "../../atom/Text/Text";
import { ICO12 } from "../../atom/Icon/Icon";
import Fraction from "./Fraction";
import "./Fraction.scss";

export default function FractionWithDetail() {
  const tagList = ["멋져", "여름", "빙수", "최대6글자", "최대5개"];

  return (
    <div className="fraction">
      <Fraction />
      <div className="fraction_desc">
        <TXT22B className="fraction_title" children="치킨왕 톤키톤키" />
        <TXT14 className="inline" children="한식" />
        <TXT14 className="inline" children=" · " />
        <div className="inline">
          <ICO12 src="/img/ico_loc.png" />
          <TXT14 className="inline" children="한들해변 도보 5분" />
        </div>
      </div>
      {tagList.map((e, index) => {
        return <TXT12 key={index} className="tag" children={"#" + e} />;
      })}
    </div>
  );
}
