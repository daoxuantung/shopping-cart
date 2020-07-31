import React from 'react';
import Banner from '../components/Banner/Banner';
import Category from '../components/Category/Category';
import FeaturedProduct from '../components/FeaturedProduct/FeaturedProduct';
import LastedProduct from '../components/LastedProduct/LastProduct';

function Home() {
    const Images = [
        'http://lorempixel.com/250/300/',
        'http://lorempixel.com/250/300/',
        'http://lorempixel.com/250/300/'
    ]

    return (
        <main className="Home">
            <Banner />
            <Category Images={Images} />
            <FeaturedProduct />
            <LastedProduct />
        </main>
    )
}

export default Home;
