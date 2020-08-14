import React from 'react';
import Banner from '../components/Banner/Banner';
import Category from '../components/Category/Category';
import FeaturedProduct from '../components/FeaturedProduct/FeaturedProduct';
import LastedProduct from '../components/LastedProduct/LastedProduct';
import Offer from '../components/Offer/Offer';
import Testimonial from '../components/Testimonial/Testimonial';
import Brand from '../components/Brand/Brand';
import Footer from '../components/Footer/Footer';

function Home() {
    return (
        <div className="Home">
            <Banner />
            <Category />
            <FeaturedProduct />
            <LastedProduct />
            <Offer />
            <Testimonial />
            <Brand />
            <Footer />
        </div>
    )
}

export default Home;
