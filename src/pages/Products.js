import React, { useEffect } from 'react';
import Product from '../components/Products/Products'
import ProductDetail from '../components/ProductDetail/ProductDetail';

import {
    Route
} from "react-router-dom";

export default function Products() {
    useEffect(() => {
        document.title = "Red Store | Products";
    }, [])
    return (
        <div className="Products">
            <Route exact path="/shopping-cart/products">
                <Product />
            </Route>
            <Route path="/shopping-cart/products/:id">
                <ProductDetail />
            </Route>
        </div>
    );
};


