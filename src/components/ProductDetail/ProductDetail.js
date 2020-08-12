import React, { useContext, useEffect, useState } from 'react';

import { ProductContext } from '../../contexts/Product';
import {
    useParams
} from "react-router-dom";
import { Container, Row, Col, FormGroup, Input, Button } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndent } from '@fortawesome/free-solid-svg-icons';

import './ProductDetail.css';
import RelatedProduct from '../RelatedProduct/RelatedProduct';
import { CartProvider, CartContext } from '../../contexts/Cart';

export default function ProductDetail() {
    const [product, setProduct] = useState('');
    const { products } = useContext(ProductContext);
    const { id } = useParams();

    useEffect(() => {
        const productMatched = products.find(product => product._id === id);
        setProduct(productMatched);
    }, [id, product, products]);

    return (
        <CartProvider>
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
                                <p className="title-link">Home / {product.title}</p>
                                <h2>{product.description}</h2>
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
                                        max="99"
                                    />
                                    <CartContext.Consumer>
                                        {
                                            value => <Button onClick={() => value.addToCart(product)}>Add to cart</Button>
                                        }
                                    </CartContext.Consumer>
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
                <RelatedProduct />
            </Container >
        </CartProvider>
    );

};