import React from "react";
import Header from '../components/calendar components/header'
import Article from "../components/calendar components/article";
import Aside from "../components/calendar components/aside";
import Footer from "../components/calendar components/footer";
import "../Styles/header.css"
import "../Styles/article.css"
import "../Styles/aside.css"
import "../Styles/footer.css"

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