import React, { useContext } from 'react';
import { ProductContext } from '../../contexts/Product'

import ProductTitle from '../ProductTitle/ProductTitle';
import PaginationProduct from '../Pagination/Pagination';
import Product from '../Product/Product';

import { Container, Row, Col } from 'reactstrap';

import {
    Link
} from "react-router-dom";

const ListProducts = () => {
    const { products } = useContext(ProductContext);
    return (
        <div className="Products">
            <ProductTitle />
            <Container className="ProductSection">
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
            <PaginationProduct />
        </div>
    );
};

export default ListProducts;