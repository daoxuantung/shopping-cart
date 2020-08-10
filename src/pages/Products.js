import React from 'react';

import { ProductProvider } from '../contexts/Product';
import ListProducts from '../components/ListProducts/ListProducts'
import ProductDetail from '../components/ProductDetail/ProductDetail';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

export default function Products() {
    return (
        <ProductProvider>
            <div className="Products">
                <Router>
                    <Switch>
                        <Route exact path="/shopping-cart/products/:name">
                            <ProductDetail />
                        </Route>
                        <Route exact path="/shopping-cart/products">
                            <ListProducts />
                        </Route>
                    </Switch>
                </Router>
            </div>
        </ProductProvider >
    );
};


