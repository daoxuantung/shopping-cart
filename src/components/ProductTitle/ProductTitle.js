import React from 'react';
import { Container, FormGroup, Input, Row, Col } from 'reactstrap';

import './ProductTitle.css';

const ProductContent = () => {
    return (
        <Container className="ProductContent">
            <Row className="w-100 m-0 flex-column">
                <Col>
                    <h3 className="title ProductContent-title">All Products</h3>
                </Col>
                <Col>
                    <FormGroup>
                        <Input type="select" name="select" id="exampleSelect">
                            <option>Default</option>
                            <option>Sort by price</option>
                            <option>Sort by rating</option>
                            <option>Sort by popularity</option>
                        </Input>
                    </FormGroup>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductContent;