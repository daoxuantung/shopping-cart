import React, { useState, useContext } from 'react';
import classNames from 'classnames';

import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem, NavLink
} from 'reactstrap';

import {
    Link
} from "react-router-dom";

import CartLogo from '../../images/cart.png';
import './Navbar.css';
import { CartContext } from '../../contexts/Cart';

const Menubar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const { count } = useContext(CartContext);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar light expand="md" className="Menubar">
            <NavbarBrand href="/shopping-cart">
                <img src={props.logo} width={125} alt="Red Store" />
            </NavbarBrand>
            <div className={classNames('ml-auto', 'Menubar-nav', { 'nav-show': isOpen })} navbar="true">
                <Nav navbar>
                    <NavItem onClick={toggle}>
                        <Link className='nav-link' to="/shopping-cart">Home</Link>
                    </NavItem >
                    <NavItem onClick={toggle}>
                        <NavLink className='nav-link' href="/shopping-cart/products">Products</NavLink>
                    </NavItem>
                    <NavItem onClick={toggle}>
                        <NavLink className='nav-link' href="/shopping-cart/login">Account</NavLink>
                    </NavItem>
                </Nav>
            </div>
            <div className="cart">
                <NavLink className="Menubar-cart" href="/shopping-cart/cart">
                    <img src={CartLogo} alt="Cart" />
                </NavLink>
                <div className="cart-number">{count}</div>
            </div>
            <NavbarToggler onClick={toggle} className="mr-2" />
        </Navbar >
    );
}


export default Menubar;

