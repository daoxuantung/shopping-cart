import React, { createContext, useState, useContext, useEffect } from 'react';
import { ProductContext } from '../contexts/Product';

export const CartContext = createContext();

export const CartProvider = (props) => {
    const { productsAll } = useContext(ProductContext);
    const [cart, setCart] = useState([]);
    const [countProduct, setCountProduct] = useState(1);
    const [size, setSize] = useState('S');
    const [price, setPrice] = useState(0);
    const [total, setTotal] = useState(0);
    const [count, setCount] = useState(0);

    const addToCart = (id) => {
        const index = cart.findIndex(item => item._id === id && item.size === size)
        const productFinded = productsAll.find(product => product._id === id);
        console.log(index);
        if (index > -1) {
            setCart([...cart.slice(0, index), { ...cart[index], count: cart[index].count + countProduct }, ...cart.slice(index + 1)])

        } else {
            setCart([...cart, { ...productFinded, count: countProduct, size }]);
        }
    }

    const removeItem = (index) => {
        setCart([...cart.slice(0, index), ...cart.slice(index + 1)]);
    }

    const countUp = (e) => {
        const value = e.target.parentElement.children[1].innerText;
        if (parseInt(value) >= 99) {
            return;
        }
        setCountProduct(countProduct + 1);
    }

    const countDown = (e) => {
        const value = e.target.parentElement.children[1].innerText;
        if (parseInt(value) <= 1) {
            return;
        }
        setCountProduct(countProduct - 1);
    }

    const changeSize = (e) => {
        setSize(e.target.value);
    }

    const valueUp = (id, size, e) => {
        const index = cart.findIndex(item => item._id === id && item.size === size);
        const value = e.target.parentElement.children[1].innerText;
        if (parseInt(value) >= 99) {
            return;
        }
        setCart([...cart.slice(0, index), { ...cart[index], count: cart[index].count + 1 }, ...cart.slice(index + 1)])
    }

    const valueDown = (id, size, e) => {
        const index = cart.findIndex(item => item._id === id && item.size === size);
        const value = e.target.parentElement.children[1].innerText;
        if (parseInt(value) <= 1) {
            return;
        }
        setCart([...cart.slice(0, index), { ...cart[index], count: cart[index].count - 1 }, ...cart.slice(index + 1)])
    }

    const changeValue = (id, size, e) => {
        const index = cart.findIndex(item => item._id === id && item.size === size);
        setCart([...cart.slice(0, index), { ...cart[index], size: e.target.value }, ...cart.slice(index + 1)])
    }

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('cart'));
        setCart(items || []);
        if (items) {
            let amount = items.reduce((total, product) => total += product.count, 0);
            setCount(amount);
        }
    }, [])

    useEffect(() => {
        const price = cart.reduce((total, item) => total += item.price * item.count, 0);
        let amount = cart.reduce((total, product) => total += product.count, 0);
        setCount(amount);
        localStorage.setItem('cart', JSON.stringify(cart));
        setPrice(price);
        setTotal(price + 15);
    }, [cart, price])

    return (
        <CartContext.Provider value={{ cart, addToCart, price, total, removeItem, count, countProduct, countUp, countDown, changeSize, size, valueUp, valueDown, changeValue }} >
            {props.children}
        </CartContext.Provider >
    );
}