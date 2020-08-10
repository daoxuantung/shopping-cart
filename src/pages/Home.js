import React from 'react';
import Banner from '../components/Banner/Banner';
import Category from '../components/Category/Category';
import FeaturedProduct from '../components/FeaturedProduct/FeaturedProduct';
import LastedProduct from '../components/LastedProduct/LastedProduct';
import Offer from '../components/Offer/Offer';
import Testimonial from '../components/Testimonial/Testimonial';
import Brand from '../components/Brand/Brand';

function Home() {
    const Images = [
        'http://lorempixel.com/250/300/',
        'http://lorempixel.com/250/300/',
        'http://lorempixel.com/250/300/'
    ];

    return (
        <div className="Home">
            <Banner />
            <Category Images={Images} />
            <FeaturedProduct />
            <LastedProduct />
            <Offer />
            <Testimonial />
            <Brand />
        </div>
    )
}

export default Home;
