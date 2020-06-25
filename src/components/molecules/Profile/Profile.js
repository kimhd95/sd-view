import React from "react";
import { TXT16M, TXT12 } from "../../atom/Text/Text";
import { ProfileThumb } from "../../atom/Image/Image";
import "./Profile.scss";

export const Profile = ({}) => {
  return (
    <div className="profile">
      <div className="profile_info">
        <div className="profile_left">
          <ProfileThumb src="/img/profile.png" />
        </div>
        <div className="profile_right">
          <TXT16M className="" children="럭셔리스타" />
          <TXT12 className="" children="세프" />
        </div>
      </div>

      <TXT12
        className="contents description"
        children={
          "안녕하세요. 장봉도에서 20년간 생선을 잡았습니다. 오셔서 즐겨주시길 바랍니다용가리. 글씨가 더 늘어난다."
        }
      />
    </div>
  );
};
