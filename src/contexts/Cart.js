import React, { createContext, useState, useContext, useEffect } from 'react';
import { ProductContext } from '../contexts/Product';

export const CartContext = createContext();

export const CartProvider = (props) => {
    const { products } = useContext(ProductContext);
    const [cart, setCart] = useState([]);
    const [price, setPrice] = useState(0);
    const [total, setTotal] = useState(0);

    const addToCart = (target, id) => {
        const value = target.parentElement.parentElement.children[3].children[1].value;

        const index = cart.findIndex(item => item._id === id);

        const data = products.find(product => product._id === id);

        if (index !== -1) {
            cart.filter((item, index) => {
                if (item.sized === value && item._id === id) {
                    cart[index].count += 1;
                    setCart([...cart]);
                } else {
                    setCart([...cart, { ...data, sized: value }]);
                }
                return item;
            });
        } else {
            setCart([...cart, { ...data, count: 1, sized: value }]);
        }
    }

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('cart'));
        setCart(items || []);
    }, [])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
        const items = JSON.parse(localStorage.getItem('cart'));
        const price = items.reduce((total, item) => total += item.price * item.count, 0);
        setPrice(price);
        setTotal(price + 15);

    }, [cart])

    return (
        <CartContext.Provider value={{ cart, addToCart, price, total }} >
            {props.children}
        </CartContext.Provider >
    );
}