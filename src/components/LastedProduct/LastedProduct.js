import React from 'react';
import Product from '../Product/Product';
import { Container, Row, Col } from 'reactstrap';

import '../FeaturedProduct/FeaturedProduct.css';

const LastedProduct = () => {
    return (
        <Container className="FeaturedProduct">
            <h3 className="title">Lasted Products</h3>
            <Row>
                <Col md="3"> <Product /></Col>
                <Col md="3"> <Product /></Col>
                <Col md="3"> <Product /></Col>
                <Col md="3"> <Product /></Col>
                <Col md="3"> <Product /></Col>
                <Col md="3"> <Product /></Col>
                <Col md="3"> <Product /></Col>
                <Col md="3"> <Product /></Col>
            </Row>
        </Container>
    );
};

export default LastedProduct;