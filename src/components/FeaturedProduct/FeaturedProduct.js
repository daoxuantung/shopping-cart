import React, { useContext } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { ProductContext } from '../../contexts/Product';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';
import ImageNotLoaded from '../ImageNotLoaded/ImageNotLoaded';
import './FeaturedProduct.css';

const FeaturedProduct = () => {
    const { featuredProducts } = useContext(ProductContext);
    const products = [1, 2, 3, 4];
    return (
        <Container className="FeaturedProduct">
            <h3 className="title">Featured Products</h3>
            <Row>
                {
                    featuredProducts.length ? featuredProducts.map(product =>
                        <Col md="3" key={product._id}>
                            <Link className="link" to={`/products/${product._id}`}>
                                <Product product={product} />
                            </Link>
                        </Col>) : products.map(product =>
                            <Col md="3" className="Image-content" key={product}>
                                <ImageNotLoaded />
                            </Col>)
                }
            </Row>
        </Container>
    );
};

export default FeaturedProduct;