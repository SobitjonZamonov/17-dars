import React from "react";
import { Header } from "./header/header";
import { Features } from "./features/features";
import { Hero } from "./hero/hero";
import { Services } from "./services/services";
import { Services2 } from "./services/services2";
import { Browse } from "./browse/browse";
import { Testimonials } from "./testimonials/testimonials";
import { Footer } from "./footer/footer";
import { Header2 } from "./header/header2";


const HomePage = () => {
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

export default HomePage

