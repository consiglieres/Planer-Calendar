import React from "react";
import imgCalendar from "../../assets/calendar_icon_151795.png";
import imgProfile from "../../assets/profile_user_icon_151793.png";

export default function Header(){
    return(
        <header>
            <section id="left_header">
                <img id="icon_calendar" src={imgCalendar}></img>
                <div id="logo">Календарь</div>
                <div></div>
            </section>
            <section id="right_header">
                <div></div>
                <div></div>
                <div></div>
                <img id="icon_user" src={imgProfile}></img>
            </section>
        </header>
    )
}