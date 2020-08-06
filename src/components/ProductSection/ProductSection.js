import React, { useContext } from 'react';
import { ProductContext } from '../../contexts/Product';
import Product from '../Product/Product'
import { Container, Row, Col } from 'reactstrap';

const ProductSection = () => {
    const { products } = useContext(ProductContext);

    return (
        <Container>
            <Row>
                {
                    products.map((product, index) =>
                        <Col key={index} md="3">
                            <Product product={product} />
                        </Col>
                    )
                }
            </Row>
        </Container>
    );
};


export default ProductSection;