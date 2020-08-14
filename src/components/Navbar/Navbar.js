import React, { useState } from 'react';
import classNames from 'classnames';

import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';

import {
    NavLink, Link
} from "react-router-dom";

import CartLogo from '../../images/cart.png';
import './Navbar.css';

const Menubar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar light expand="md" className="Menubar">
            <NavbarBrand href="/shopping-cart">
                <img src={props.logo} width={125} alt="Red Store" />
            </NavbarBrand>
            <div className={classNames('ml-auto', 'Menubar-nav', { 'nav-show': isOpen })} navbar="true">
                <Nav navbar>
                    <NavItem>
                        <NavLink className="nav-link" to="/shopping-cart">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink activeClassName='is-active' className="nav-link" to="/shopping-cart/products">Products</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink activeClassName='is-active' className="nav-link" to="/shopping-cart/about">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink activeClassName='is-active' className="nav-link" to="/shopping-cart/contact">Contact</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink activeClassName='is-active' className="nav-link" to="/shopping-cart/account">Account</NavLink>
                    </NavItem>
                </Nav>
            </div>
            <div className="cart">
                <Link className="Menubar-cart" to="/shopping-cart/cart">
                    <img src={CartLogo} width="100%" height="100%" alt="Cart" />
                </Link>
            </div>
            <NavbarToggler onClick={toggle} className="mr-2" />
        </Navbar >
    );
}


export default Menubar;

