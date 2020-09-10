import React, { useContext, useState, useEffect } from 'react';
import { ProductContext } from '../../contexts/Product'

import PaginationProduct from '../Pagination/Pagination';
import ListProducts from './ListProducts';
import Footer from '../Footer/Footer';

import { Container, FormGroup, Input, Row, Col, NavItem, Nav } from 'reactstrap';

import {
    NavLink, useLocation
} from "react-router-dom";

import './Products.css';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

const Products = () => {
    const { products } = useContext(ProductContext);
    const [productsFilter, setProducts] = useState([]);

    useEffect(() => {
        setProducts([...products]);
    }, [products])


    const productsFiltered = (e) => {
        const value = e.target.value;
        switch (value) {
            case 'Sort by price':
                setProducts([...products].sort((product1, product2) => product1.price - product2.price));
                break;
            case 'Sort by rating':
                setProducts([...products].sort((product1, product2) => product1.rating - product2.rating));
                break;
            case 'Sort by popularity':
                setProducts([...products].sort((product1, product2) => product1.view - product2.view));
                break;
            default:
                setProducts([...products]);
                break;
        }
    }

    let query = useQuery();

    return (
        <div className="Products">
            <Container className="ProductContent">
                <h3 className="title ProductContent-title">All Products</h3>
                <Row className="w-100 m-0 flex-row justify-content-between">
                    <Col md="6">
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/shopping-cart/products">All</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/shopping-cart/products?category=shirt">Shirt</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/shopping-cart/products?category=dress">Dress</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/shopping-cart/products?category=sweater">Sweater</NavLink>
                            </NavItem>
                        </Nav>
                    </Col>
                    <Col md="6">
                        <FormGroup>
                            <Input type="select" name="select" onChange={(e) => productsFiltered(e)}>
                                <option>Default</option>
                                <option>Sort by price</option>
                                <option>Sort by rating</option>
                                <option>Sort by popularity</option>
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>
            </Container>
            <ListProducts category={query.get("category")} products={productsFilter} limit={query.get("limit")} page={query.get("page")} />
            <PaginationProduct />
            <Footer />
        </div>
    );
};

export default Products;