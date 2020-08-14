import React, { Component } from 'react';
import axios from 'axios';

export const ProductContext = React.createContext();

export class ProductProvider extends Component {
    constructor(props) {
        super();
        this.state = {
            products: [],
            latedProducts: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:9080/api/products?page=1&limit=20')
            .then(res => {
                const products = res.data;
                const latedProducts = products.slice(products.length - 8);

                this.setState({
                    products,
                    latedProducts
                });
            })
            .catch(err => {
                console.log(err);
            })
    }


    render() {
        const { products, latedProducts } = this.state;
        return (
            <ProductContext.Provider
                value={{
                    products, latedProducts
                }}
            >
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}
