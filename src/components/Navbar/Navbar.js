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
import { ProductContext } from '../../contexts/Product';

const Menubar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const { count } = useContext(CartContext);
    const { setProductsDefault } = useContext(ProductContext);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <Navbar light expand="md" className="Menubar">
            <NavbarBrand href="/">
                <img src={props.logo} width={125} alt="Red Store" />
            </NavbarBrand>
            <div className={classNames('ml-auto', 'Menubar-nav', { 'nav-show': isOpen })} navbar="true">
                <Nav navbar>
                    <NavItem>
                        <Link className='nav-link' to="/">Home</Link>
                    </NavItem >
                    <NavItem onClick={() => setProductsDefault()}>
                        <Link className='nav-link' to="/products">Products</Link>
                    </NavItem>
                    <NavItem >
                        <NavLink className='nav-link' href="/login">Account</NavLink>
                    </NavItem>
                </Nav>
            </div>
            <div className="cart">
                <Link className="Menubar-cart" to="/cart">
                    <img src={CartLogo} alt="Cart" />
                </Link>
                <div className="cart-number">{count}</div>
            </div>
            <NavbarToggler onClick={toggle} className="mr-2" />
        </Navbar >
    );
}


export default Menubar;

