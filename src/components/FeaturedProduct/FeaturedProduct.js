import React, { useContext } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { ProductContext } from '../../contexts/Product';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';
import './FeaturedProduct.css';

const FeaturedProduct = () => {
    const { featuredProducts } = useContext(ProductContext);
    return (
        <Container className="FeaturedProduct">
            <h3 className="title">Featured Products</h3>
            <Row>
                {
                    featuredProducts.map(product =>
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

export default FeaturedProduct;