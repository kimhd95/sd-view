import React, { useEffect, useState } from "react";
import Header from "../../../molecules/Common/Header";
import TopNavigation from "../../../organisms/Navigation/TopNavigation";
import {DatePickers}  from "../../../molecules/DatePicker/DatePickers";
import AccommodationList from "../../../organisms/List/AccommodationList";
import {TitleWithLink} from "../../../molecules/Title/TitleWithLink";
import {ViewAllButton} from "../../../atom/Button/Button";
import "./Accommodation.scss";

export default function Accommodation() {
  return (
    <>
      <Header title="장봉도" />
      <TopNavigation />
      <DatePickers/>
      <TitleWithLink title="장봉도"/>
      <AccommodationList/>
      <ViewAllButton name="숙소 전체보기" src="/viewAll"/>
    </>
  );
}
