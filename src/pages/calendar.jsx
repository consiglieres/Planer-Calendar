import React from "react";
import Header from "../components/calendar/Header.tsx";
import CalendarGrid from "../components/calendar/CalendarGrid.tsx"
import "../styles/calendar styles/header.css";

export default function Calendar(){
    return(
        <>
        <Header/>
        <CalendarGrid/>
        </>
    );
};