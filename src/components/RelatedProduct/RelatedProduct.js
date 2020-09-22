import React from 'react';
import Product from '../Product/Product';
import { Container, Col, Row, NavLink } from 'reactstrap';
import './RelatedProduct.css';

const RelatedProduct = ({ category, title, productsAll }) => {
    const productsFiltered = productsAll ? productsAll.filter(product => product.category === category) : [];
    const index = productsFiltered.findIndex(product => product.title === title);
    const relatedProducts = [...productsFiltered.slice(0, index), ...productsFiltered.slice(index + 1)].slice(0, 4);
    return (
        <Container className="RelatedProducts p-0">
            <Row className="w-100 m-0">
                <Col md="6">
                    <h3 className="RelatedProducts-title title">Related Products</h3>
                </Col>
                <Col md="6">
                    {
                        category && <NavLink href={`/shopping-cart/products?category=${category}`}>View More &#8594;</NavLink>
                    }
                </Col>
            </Row>
            <Row className="w-100 m-0">
                {
                    relatedProducts.map(product =>
                        <Col md="3" key={product._id}>
                            <NavLink className="RelatedProducts-link" href={`/shopping-cart/products/${product._id}`}>
                                <Product product={product} />
                            </NavLink>
                        </Col>)
                }
            </Row>
        </Container>
    );
};


export default RelatedProduct;