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
                        <Link className='nav-link' to="/shopping-cart/account">Account</Link>
                    </NavItem>
                </Nav>
            </div>
            <div className="cart">
                <Link className="Menubar-cart" to="/shopping-cart/cart">
                    <img src={CartLogo} width="100%" height="100%" alt="Cart" />
                </Link>
                <div className="cart-number">{count}</div>
            </div>
            <NavbarToggler onClick={toggle} className="mr-2" />
        </Navbar >
    );
}


export default Menubar;

