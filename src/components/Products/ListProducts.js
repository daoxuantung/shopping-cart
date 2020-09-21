import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';

import './Products.css';

const ListProducts = ({ category, products }) => {
    useEffect(() => {
        category ? document.title = "Products | " + category.charAt(0).toUpperCase() + category.slice(1) : document.title = 'Red Store | All Products';
    }, [category])
    return (
        <Container className="ListProducts">
            <Row>
                {
                    products.map((product) =>
                        <Col key={product._id} md="3">
                            <Link className="link" to={`/shopping-cart/products/${product._id}`}>
                                <Product product={product} />
                            </Link>
                        </Col>
                    )
                }
            </Row>
        </Container>
    );
};

export default ListProducts;