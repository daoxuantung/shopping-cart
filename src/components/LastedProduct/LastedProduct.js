import React, { useContext } from 'react';
import Product from '../Product/Product';
import { Container, Row, Col } from 'reactstrap';

import '../FeaturedProduct/FeaturedProduct.css';
import { ProductContext } from '../../contexts/Product';

import { Link } from 'react-router-dom';

const LastedProduct = () => {
    const { latedProducts } = useContext(ProductContext);

    return (
        <Container className="FeaturedProduct">
            <h3 className="title">Lasted Products</h3>
            <Row>
                {
                    latedProducts.map(product =>
                        <Col md="3" key={product._id}>
                            <Link className="link" to={`/shopping-cart/products/${product._id}`}>
                                <Product product={product} />
                            </Link>
                        </Col>)
                }
            </Row>
        </Container >
    );
};

export default LastedProduct;