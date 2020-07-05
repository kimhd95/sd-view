import React from "react";
import Header from "../../../molecules/Common/Header";
import AccommodationDetailNavigation from "../../../organisms/Navigation/AccommodationDetailNavigation";
import AccommodationList from "../../../organisms/List/AccommodationList";
import { DatePickers } from "../../../molecules/DatePicker/DatePickers";

export default function Accommodation() {

    return (
        <>
            <Header title="숙소" />
            <AccommodationDetailNavigation />
            <DatePickers />
            <AccommodationList />
        </>
    );
}
