import React, { useContext } from 'react';
import { ProductContext } from '../../contexts/Product'

import PaginationProduct from '../Pagination/Pagination';
import ListProducts from './ListProducts';
import Footer from '../Footer/Footer';

import { Container, FormGroup, Input, Row, Col, NavItem, Nav } from 'reactstrap';

import {
    Link, useLocation
} from "react-router-dom";

import './Products.css';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

const Products = () => {
    const { products, productsSorted, productsFiltered } = useContext(ProductContext);
    const categories = ['', 'shirt', 'dress', 'sweater'];
    let query = useQuery();
    return (
        <div className="Products">
            <Container className="ProductContent">
                {
                    query.get("category") ?
                        <h3 className="title ProductContent-title">Red Store / {query.get("category").slice(0, 1).toUpperCase() + query.get("category").slice(1)}</h3>
                        : <h3 className="title ProductContent-title">Red Store / All Products</h3>
                }
                <Row className="w-100 m-0 flex-row justify-content-between">
                    <Col md="6">
                        <Nav navbar>
                            {
                                categories.map((category, index) => {
                                    if (category.length) {
                                        const string = category.slice(0, 1).toUpperCase() + category.slice(1);
                                        return (
                                            <NavItem key={index} active={query.get("category") === category} onClick={(e) => productsFiltered(e, category)}>
                                                <Link className="nav-link" to={`/products?category=${category}`}>{string}</Link>
                                            </NavItem>

                                        )
                                    } else {
                                        return (
                                            <NavItem key={index} onClick={(e) => productsFiltered(e, category)} active={!query.get("category")}>
                                                <Link className="nav-link" to={`/products`}>All</Link>
                                            </NavItem>
                                        )
                                    }

                                })
                            }
                        </Nav>
                    </Col>
                    <Col md="6">
                        <FormGroup>
                            <Input type="select" name="select" onChange={(e) => productsSorted(e)}>
                                <option value="default">Default</option>
                                <option value="price">Sort by price</option>
                                <option value="rating">Sort by rating</option>
                                <option value="popularity">Sort by popularity</option>
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>
            </Container>
            <ListProducts category={query.get("category")} products={products} limit={query.get("limit")} page={query.get("page")} />
            <PaginationProduct />
            <Footer />
        </div >
    );
};

export default Products;