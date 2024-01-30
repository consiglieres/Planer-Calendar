import React from "react";
import Header from '../components/calendar components/header.jsx';
import Article from "../components/calendar components/article.jsx";
import Aside from "../components/calendar components/aside.jsx";
import Footer from "../components/calendar components/footer.jsx";
import "../styles/calendar styles/header.css";
import "../styles/calendar styles/article.css";
import "../styles/calendar styles/aside.css";
import "../styles/calendar styles/footer.css";

export default function Calendar(){

    return(
        <>
            <Header />
            <Article />
            <Aside />
            <Footer />
        </>
    )
}
