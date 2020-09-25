import React, { useContext } from 'react';
import Product from '../Product/Product';
import { Container, Col, Row, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './RelatedProduct.css';
import { ProductContext } from '../../contexts/Product';

const RelatedProduct = ({ category, title, productsAll }) => {
    const { productsFiltered } = useContext(ProductContext)
    const productsFilter = productsAll ? productsAll.filter(product => product.category === category) : [];
    const index = productsFilter.findIndex(product => product.title === title);
    const relatedProducts = [...productsFilter.slice(0, index), ...productsFilter.slice(index + 1)].slice(0, 4);
    return (
        <Container className="RelatedProducts p-0">
            <Row className="w-100 m-0">
                <Col md="6">
                    <h3 className="RelatedProducts-title title">Related Products</h3>
                </Col>
                <Col md="6">
                    {
                        <Link to={`/products?category=${category}`} onClick={(e) => productsFiltered(e, category)}>View More &#8594;</Link>
                    }
                </Col>
            </Row>
            <Row className="w-100 m-0">
                {
                    relatedProducts.map(product =>
                        <Col md="3" key={product._id}>
                            <NavLink className="RelatedProducts-link" href={`/products/${product._id}`}>
                                <Product product={product} />
                            </NavLink>
                        </Col>)
                }
            </Row>
        </Container>
    );
};


export default RelatedProduct;