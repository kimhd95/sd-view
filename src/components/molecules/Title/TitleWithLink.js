import React from 'react' 
import { Link } from "react-router-dom";
import "./TitleWithLink.scss"; 
import { TXT20M } from "../../atom/Text/Text";
import { TXT14 } from "../../atom/Text/Text";
import { ViewAllImg } from "../../atom/Image/Image";

export const TitleWithLink = ({ ...props }) => {

    return ( 
        <> 
            <div class="TitleWithLink">
                <TXT20M children={props.title + " 숙소"} />
                <Link class="ViewAll" src="/viewAll">
                    <TXT14 children="전체보기" />
                    <ViewAllImg src="/img/view_all.png" />
                </Link>
            </div>
        </> ); 
};
