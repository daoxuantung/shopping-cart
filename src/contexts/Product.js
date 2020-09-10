import React, { useState, useEffect } from 'react';

import API from './../axios/api';

export const ProductContext = React.createContext();

export const ProductProvider = props => {
    const [products, setProducts] = useState([]);
    const [latedProducts, setLatedProducts] = useState([]);
    const [featuredProducts, setFeaturedProducts] = useState([]);

    useEffect(() => {
        async function fetchData1() {
            const products = (await API.get(`products`)).data;

            setProducts(products);
        }
        fetchData1();
    }, [])

    useEffect(() => {
        async function fetchData2() {
            const latedProducts = (await API.get(`lastedProducts`)).data;
            setLatedProducts(latedProducts);
        }
        fetchData2();
    }, [])

    useEffect(() => {
        async function fetchData3() {
            const featuredProducts = (await API.get(`featuredProducts`)).data;
            setFeaturedProducts(featuredProducts);
        }
        fetchData3();
    }, []);

    return (
        <ProductContext.Provider
            value={{ products, latedProducts, featuredProducts }}
        >
            {props.children}
        </ProductContext.Provider >
    );
}
