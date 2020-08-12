import React from 'react';
import ListProducts from '../components/ListProducts/ListProducts'
import ProductDetail from '../components/ProductDetail/ProductDetail';

import {
    Route
} from "react-router-dom";

export default function Products() {
    return (
        <div className="Products">
            <Route exact path="/shopping-cart/products">
                <ListProducts />
            </Route>
            <Route path="/shopping-cart/products/:id">
                <ProductDetail />
            </Route>
        </div>
    );
};


