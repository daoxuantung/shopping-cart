import React, { Component } from 'react';
import axios from 'axios';

export const ProductContext = React.createContext();

export class ProductProvider extends Component {
    constructor(props) {
        super();
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        const { products } = this.state;

        if (!products.length) {
            axios.get('http://localhost:3000/api/products?page=1&limit=20')
                .then(res => {
                    this.setState({
                        products: res.data
                    });
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }


    render() {
        const { products } = this.state;
        return (
            <ProductContext.Provider
                value={{
                    products
                }}
            >
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}
