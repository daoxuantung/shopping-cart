import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';
import ImageNotLoaded from '../ImageNotLoaded/ImageNotLoaded';

import './Products.css';

const ListProducts = ({ category, products }) => {
    useEffect(() => {
        category ? document.title = "Products | " + category.charAt(0).toUpperCase() + category.slice(1) : document.title = 'Red Store | All Products';
    }, [category])
    const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    return (

        <Container className="ListProducts">
            {
                products.length ?
                    <Row>
                        {
                            products.map((product) =>
                                <Col key={product._id} md="3">
                                    <Link className="link" to={`/products/${product._id}`}>
                                        <Product product={product} />
                                    </Link>
                                </Col>
                            )
                        }
                    </Row> :
                    <Row>
                        {
                            images.map(product =>
                                <Col md="3" className="Image-content" key={product}>
                                    <ImageNotLoaded />
                                </Col>)
                        }
                    </Row>
            }
        </Container>
    );
};

export default ListProducts;