import React, { Component } from 'react';

export const CartContext = React.createContext();

export class CartProvider extends Component {
    constructor(props) {
        super();
        this.state = {
            cart: JSON.parse(localStorage.getItem('cart')) || [],
            // countUpdate: this.countUpdate.bind(this),
            addToCart: this.addToCart.bind(this)
        }
    }

    addToCart(product) {
        let items = JSON.parse(localStorage.getItem('cart')) || [];

        if (!items.length) {
            items.push(product);
            localStorage.setItem('cart', JSON.stringify(items));
            return;
        }

        const indexOfItem = items.findIndex(item => item._id === product._id);

        if (indexOfItem !== -1) {
            items[indexOfItem].count += 1;
        } else {
            items.push(product);
        }

        localStorage.setItem('cart', JSON.stringify(items));

        this.setState({
            cart: JSON.parse(localStorage.getItem('cart')),
        })
    }

    // countUpdate() {
    //     const { cart } = this.state;
    //     let count = 0;

    //     for (let item of cart) {
    //         count += item.count;
    //     }

    //     this.setState({
    //         count
    //     })
    // }


    render() {
        return (
            <CartContext.Provider value={this.state} >
                {this.props.children}
            </CartContext.Provider >
        );
    }
}