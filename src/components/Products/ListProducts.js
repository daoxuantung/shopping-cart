import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';

const ListProducts = ({ category, products }) => {
    const productsFilter = products.filter(product => product.category === category);
    useEffect(() => {
        category ? document.title = "Products | " + category.charAt(0).toUpperCase() + category.slice(1) : document.title = 'Red Store | All Products';
    }, [productsFilter, category])
    return (
        <Container>
            <Row>
                {
                    category ? productsFilter.map((product) =>
                        <Col key={product._id} md="3">
                            <Link className="link" to={`/shopping-cart/products/${product._id}`}>
                                <Product product={product} />
                            </Link>
                        </Col>
                    ) : products.map((product) =>
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