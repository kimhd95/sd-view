import React from "react";
import Header from "../../components/organisms/Search/Header";
import * as Text from "../../components/atom/Text/Text";
import Menu from "../../components/organisms/Search/Restaurant/Menu";

import SliderContent from "../../components/organisms/Slider/Slider";

import * as Info from "../../components/atom/Info/Info";

export default function Restaurant() {
  return (
    <div>
      <Header />
      <Menu />

      <SliderContent />

      <Text.Title children="장봉도 식당 둘러보기" />
      <Info.smallTitle children="장봉도 오후엔팬션" />
    </div>
  );
}
