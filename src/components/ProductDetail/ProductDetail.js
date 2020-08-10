import React, { useContext, useEffect, useState } from 'react';

import { ProductContext } from '../../contexts/Product';
import Product from '../Product/Product';
import {
    useParams, Link
} from "react-router-dom";
import { Container, Row, Col, FormGroup, Input, Button } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndent } from '@fortawesome/free-solid-svg-icons';

import './ProductDetail.css';

export default function ProductDetail() {
    const [product, setProduct] = useState('');
    const { products } = useContext(ProductContext);
    const { name } = useParams();

    useEffect(() => {
        const productMatched = products.find(product => product.name.toLowerCase().split(' ').join('-') === name);
        setProduct(productMatched);
    }, [name, product, products]);

    return (
        <Container className="ProductDetail">
            <Container className="ProductDetail-container">
                {
                    product &&
                    <Row className="justify-content-between">
                        <Col md="6" className="ProductDetail-img">
                            <img src={product.galleyUrl[0]} alt="" width="100%" />
                            <div className="slide-images">
                                {
                                    product.galleyUrl.map((image, index) =>
                                        <div className="image" key={index}>
                                            <img src={image} alt="" />
                                        </div>)
                                }
                            </div>
                        </Col>
                        <Col md="6" className="ProductDetail-content">
                            <p className="title-link">Home / {product.name}</p>
                            <h2>{product.title}</h2>
                            <h4>${product.price}</h4>
                            <FormGroup className="ProductDetail-form">
                                <Input
                                    type="select"
                                    name="select"
                                    id="size">
                                    <option>Select Size</option>
                                    {
                                        product.size.map((item, index) => <option key={index} >{item}</option>)
                                    }
                                </Input>
                            </FormGroup>
                            <FormGroup className="form">
                                <Input
                                    type="number"
                                    name="number"
                                    placeholder="1"
                                    min="1"
                                />
                                <Button>Add to cart</Button>
                            </FormGroup>
                            <h3>
                                Product Details
                            <FontAwesomeIcon icon={faIndent} />
                            </h3>
                            <p className="content-detail">{product.content}</p>
                        </Col>
                    </Row>
                }
            </Container>
            <Container className="RelatedProducts p-0">
                <Row className="w-100 m-0">
                    <Col md="6">
                        <h3 className="RelatedProducts-title title">Related Products</h3>
                    </Col>
                    <Col md="6">
                        <Link to="/shopping-cart/related">View More</Link>
                    </Col>
                </Row>
                <Row className="w-100 m-0">
                    <Col md="3"> <Product /></Col>
                    <Col md="3"> <Product /></Col>
                    <Col md="3"> <Product /></Col>
                    <Col md="3"> <Product /></Col>
                </Row>
            </Container>
        </Container >
    );

};