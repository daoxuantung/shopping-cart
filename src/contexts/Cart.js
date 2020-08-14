import React, { Component } from 'react';

export const CartContext = React.createContext();

export class CartProvider extends Component {
    constructor(props) {
        super();
        this.state = {
            cart: JSON.parse(localStorage.getItem('cart')) || [],
            addToCart: this.addToCart.bind(this)
        }
    }

    addToCart(product) {
        let { cart } = this.state;

        if (!cart.length) {
            cart.push(product);
            localStorage.setItem('cart', JSON.stringify(cart));
            return;
        }

        const indexOfItem = cart.findIndex(item => item._id === product._id);

        if (indexOfItem !== -1) {
            cart[indexOfItem].count += 1;
        } else {
            cart.push(product);
        }

        localStorage.setItem('cart', JSON.stringify(cart));

        this.setState({
            cart: JSON.parse(localStorage.getItem('cart'))
        })
    }

    render() {
        return (
            <CartContext.Provider value={this.state} >
                {this.props.children}
            </CartContext.Provider >
        );
    }
}