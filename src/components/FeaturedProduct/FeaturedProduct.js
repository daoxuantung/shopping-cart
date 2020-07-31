import React from 'react';
import Product from '../Product/Product';
import { Container, Row, Col } from 'reactstrap';

import './FeaturedProduct.css';

const FeaturedProduct = () => {
    return (
        <Container className="FeaturedProduct">
            <h3 className="FeaturedProduct-title">Featured Products</h3>
            <Row>
                <Col md="3"> <Product /></Col>
                <Col md="3"> <Product /></Col>
                <Col md="3"> <Product /></Col>
                <Col md="3"> <Product /></Col>
            </Row>
        </Container>
    );
};

export default FeaturedProduct;