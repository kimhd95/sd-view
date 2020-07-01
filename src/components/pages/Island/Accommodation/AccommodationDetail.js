import React from "react";
import Header from "../../../molecules/Common/Header";
import AccommodationDetailNavigation from "../../../organisms/Navigation/AccommodationDetailNavigation";
import AccommodationList from "../../../organisms/List/AccommodationList";
import { Profile } from "../../../molecules/Profile/Profile";

// import "./Restaurant.scss";
import Fraction from "../../../organisms/Fraction/FractionWithDetail";

export default function Accommodation() {
  return (
    <>
      <Header title="숙소" />
      <AccommodationDetailNavigation />
      <AccommodationList/>
    </>
  );
}