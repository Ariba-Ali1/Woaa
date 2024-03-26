import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Section_1 from "../components/Section_1/Section_1";
import NewArival from "../components/NewArivalBanner/NewArivalBanner";
import Product from "../components/Product/Product";
import Footer from "../components/Footer/Footer";
import MostLoved from "../components/MostLoved/MostLoved"
import Feature from "../components/Featured/Featured";
import Ambiance from "../components/Ambiance/Ambiance";
const Home = () => {
    return <Fragment>
        <Header/>
        <Banner/>
        <Section_1/>
        <NewArival/>
        <Product/>
        <Feature/>
        <MostLoved/>
        <Ambiance/>
        <Footer/>
        
        
    </Fragment>
};

export default Home;