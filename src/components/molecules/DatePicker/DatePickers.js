import React, { useState } from 'react' 
import { registerLocale, setDefaultLocale } from "react-datepicker"; 
import "./DatePickers.scss"; 
import { ICO20 } from "../../atom/Icon/Icon";
import ko from 'date-fns/locale/ko'; 
registerLocale('ko', ko); 

export const DatePickers = ({ ...props }) => {

    return ( 
        <> 
            <div class="datepicker_wrap">
                <input type="date" name="start_date"></input>
                <span> - </span>
                <input type="date" name="end_date"></input>
            </div>
        </> ); 
};
