import React from "react";
import Navbar from "../composants/navbar";
import Footer from "../composants/footer";
import {Outlet} from "react-router-dom";

const Layout = (props) => {

    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Layout