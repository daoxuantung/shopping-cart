import React from 'react';
import Product from '../Product/Product';

import { Container, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import './RelatedProduct.css';

const RelatedProduct = props => {
    const { relatedProducts } = props;
    return (
        <Container className="RelatedProducts p-0">
            <Row className="w-100 m-0">
                <Col md="6">
                    <h3 className="RelatedProducts-title title">Related Products</h3>
                </Col>
                <Col md="6">
                    <Link to="/shopping-cart/related">View More</Link>
                </Col>
            </Row>
            <Row className="w-100 m-0">
                {
                    relatedProducts.map(product =>
                        <Col md="3" key={product._id}>
                            <Link className="link" to={`/shopping-cart/products/${product._id}`}>
                                <Product product={product} />
                            </Link>
                        </Col>)
                }
            </Row>
        </Container>
    );
};


export default RelatedProduct;