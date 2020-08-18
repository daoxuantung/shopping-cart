import React, { Component } from 'react';
import axios from 'axios';

export const ProductContext = React.createContext();

export class ProductProvider extends Component {
    constructor(props) {
        super();
        this.state = {
            products: [],
            latedProducts: [],
            featuredProducts: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:9080/api/products?page=1&limit=20')
            .then(res => {
                const products = res.data;
                const latedProducts = products.slice(products.length - 8);
                const sortProducts = products.sort((product1, product2) => product1.view - product2.view)
                const featuredProducts = sortProducts.slice(products.length - 4);

                this.setState({
                    products,
                    latedProducts,
                    featuredProducts
                });
            })
            .catch(err => {
                console.log(err);
            })
    }


    render() {
        const { products, latedProducts, featuredProducts } = this.state;
        return (
            <ProductContext.Provider
                value={{
                    products, latedProducts, featuredProducts
                }}
            >
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}
