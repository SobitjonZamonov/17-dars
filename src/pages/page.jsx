import React from "react";
import { Header } from "./home/header/header";
import { Features } from "./home/features/features";
import { Hero } from "./home/hero/hero";
import { Services } from "./home/services/services";
import { Services2 } from "./home/services/services2";
import { Browse } from "./home/browse/browse";
import { Testimonials } from "./home/testimonials/testimonials";
import { Footer } from "./home/footer/footer";
import { Header2 } from "./home/header/header2";


const AllPages = () => {
    return (
        <>
            <Header />
            <Header2 />
            <Features />
            <Hero />
            <Services />
            <Services2 />
            <Browse />
            <Testimonials />
            <Footer />
        </>
    )
}

export default AllPages

