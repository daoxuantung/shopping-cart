import React, { useContext, useEffect, useState } from 'react';

import { ProductContext } from '../../contexts/Product';
import {
    useParams, Link
} from "react-router-dom";
import { Container, Row, Col, FormGroup, Input, Button, Label } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndent } from '@fortawesome/free-solid-svg-icons';

import './ProductDetail.css';
import RelatedProduct from '../RelatedProduct/RelatedProduct';
import { CartContext } from '../../contexts/Cart';

export default function ProductDetail() {
    const [product, setProduct] = useState('');
    const [slide, setSlide] = useState('');
    const { products } = useContext(ProductContext);
    const { addToCart } = useContext(CartContext);
    const { id } = useParams();

    const slideShow = (e) => {
        setSlide(e.target.src);
    }

    useEffect(() => {
        const productMatched = products.find(product => product._id === id);
        setProduct(productMatched);
    }, [id, product, products]);

    return (
        <Container className="ProductDetail">
            <Container className="ProductDetail-container">
                {
                    product &&
                    <Row className="justify-content-between">
                        <Col md="6" className="ProductDetail-img">
                            <img src={slide || product.galleyUrl[0]} alt="" width="100%" height="500px" />
                            <div className="slide-images">
                                {
                                    product.galleyUrl.map((image, index) =>
                                        <div className="image" key={index} onClick={(e) => slideShow(e)} >
                                            <img src={image} alt="" height="120px" />
                                        </div>)
                                }
                            </div>
                        </Col>
                        <Col md="6" className="ProductDetail-content">
                            <p className="title-link">
                                <Link to="/shopping-cart">Home </Link>
                                /
                                <Link to="/shopping-cart/products"> Products </Link>
                                /
                                <Link to={`/shopping-cart/products/${product._id}`}> {product.title} </Link>
                            </p>
                            <h2>{product.description}</h2>
                            <h4>${product.price}</h4>
                            <FormGroup className="ProductDetail-form">
                                <Label>Size</Label>
                                <Input
                                    type="select"
                                    name="select"
                                    id="size">
                                    <option>S</option>
                                    <option>M</option>
                                    <option>L</option>
                                    <option>XL</option>
                                </Input>
                            </FormGroup>
                            <FormGroup >
                                <Button onClick={(e) => addToCart(e.target, product._id)}>Add to cart</Button>
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
    );

};