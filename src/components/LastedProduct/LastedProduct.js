import React, { useContext } from 'react';
import Product from '../Product/Product';
import { Container, Row, Col } from 'reactstrap';

import '../FeaturedProduct/FeaturedProduct.css';
import { ProductContext } from '../../contexts/Product';
import ImageNotLoaded from '../ImageNotLoaded/ImageNotLoaded';

import { Link } from 'react-router-dom';

const LastedProduct = () => {
    const { latedProducts } = useContext(ProductContext);
    const products = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <Container className="FeaturedProduct">
            <h3 className="title">Lasted Products</h3>
            <Row>
                {
                    latedProducts.length ? latedProducts.map(product =>
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
        </Container >
    );
};

export default LastedProduct;