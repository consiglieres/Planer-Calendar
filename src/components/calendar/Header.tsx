import React from "react";
import calendar from  "../../assets/calendar.png";
import "../../styles/calendar styles/button.css";

export default function Header(){
    return(
        <>
            <header>
                <section className="left_side">
                    {/* <img src={calendar} alt="" width={50} height={40} calss="img_header"></img> */}
                    <span className="text_logo">Calendar</span>
                    <button className="new_button">New Issue</button>
                </section>

                <section className="center_side">
                    <span className="company_name">No name</span>
                </section>

                <section className="right_side">
                    <button className="button_planer">Planer</button>
                    <button className="button_health">Health</button>
                    <button className="button_settings">Settings</button>
                </section>
            </header>
        </>
    );
};