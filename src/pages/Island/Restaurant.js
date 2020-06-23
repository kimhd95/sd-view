import React, { useEffect, useState } from "react";
import Header from "../../components/molecules/Common/Header";
import TopNavigation from "../../components/organisms/Navigation/TopNavigation";
import SliderWithTitle from "../../components/organisms/Slider/SliderWithTitle";
import ListWithTitle from "../../components/organisms/List/ListWithTitle";

import "./Restaurant.scss";

import { GetAxios, PostAxios } from "../../libs/Axios";

export default function Restaurant() {
  const [image, setImage] = useState("");

  useEffect(() => {
    const axios = async () => {
      // const test2 = await PostAxios("/test_api");
      const test = await GetAxios("/api/v1/users/images/jangbongdo");
      const img = test.data;
      setImage(img);
    };

    axios();
  }, []);

  return (
    <>
      <Header title="장봉도" />
      <TopNavigation />
      <SliderWithTitle />
      <ListWithTitle />
    </>
  );
}
