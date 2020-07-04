import React from "react";
import Header from "../../../molecules/Common/Header";
import AccommodationDetailNavigation from "../../../organisms/Navigation/AccommodationDetailNavigation";
import AccommodationList from "../../../organisms/List/AccommodationList";
import { Profile } from "../../../molecules/Profile/Profile";
import { GetAxios } from "../../../../libs/Axios";

// import "./Restaurant.scss";
import Fraction from "../../../organisms/Fraction/FractionWithDetail";

export default function Accommodation() {
    console.log("hi");
    const test = GetAxios("get_localfood_list_by_island_id", "B", "0101i");
    console.log(test);

    return (
        <>
            <Header title="숙소" />
            <AccommodationDetailNavigation />
            <AccommodationList />
        </>
    );
}
