import React, { useContext, useEffect, useState, Fragment } from 'react';
import { NotificationContainer } from 'react-notifications';
import { ProductContext } from '../../contexts/Product';
import {
    useParams, Link
} from "react-router-dom";
import { Container, Row, Col, FormGroup, Input, Button, Label, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndent, faImage } from '@fortawesome/free-solid-svg-icons';

import './ProductDetail.css';
import RelatedProduct from '../RelatedProduct/RelatedProduct';
import Footer from '../Footer/Footer';
import { CartContext } from '../../contexts/Cart';
import ImageNotLoaded from '../ImageNotLoaded/ImageNotLoaded';

export default function ProductDetail() {
    const [product, setProduct] = useState('');
    const [slide, setSlide] = useState('');
    const { products, productsAll } = useContext(ProductContext);
    const { addToCart, countProduct, countUp, countDown, changeSize, size } = useContext(CartContext);
    const { id } = useParams();
    const images = [1, 2, 3, 4];

    const slideShow = (e) => {
        setSlide(e.target.src);
    }

    useEffect(() => {
        const productMatched = productsAll.find(product => product._id === id);
        setProduct(productMatched);
    }, [id, product, productsAll, countProduct]);

    return (
        <Fragment>
            <Container className="ProductDetail p-0">
                <Container className="ProductDetail-container">
                    {
                        product ?
                            <Row className="justify-content-between">
                                <Col md="6" className="ProductDetail-img">
                                    <img className="product-image" src={slide || product.galleyUrl[0]} alt="" />
                                    <div className="slide-images">
                                        {
                                            product.galleyUrl.map((image, index) =>
                                                <div className="image" key={index} onClick={(e) => slideShow(e)} >
                                                    <img src={image} alt="" />
                                                </div>)
                                        }
                                    </div>
                                </Col>
                                <Col md="6" className="ProductDetail-content">
                                    <p className="title-link">
                                        <Link to="">Home&nbsp;</Link>
                                /
                                <Link to="/products">&nbsp;Products&nbsp;</Link>
                                /
                                &nbsp;{product.title}
                                    </p>
                                    <h2>{product.description}</h2>
                                    <h4>${product.price}</h4>
                                    <FormGroup className="ProductDetail-form">
                                        <Label>Size:</Label>
                                        <Input
                                            onChange={(e) => changeSize(e)}
                                            type="select"
                                            value={size}>
                                            <option>S</option>
                                            <option>M</option>
                                            <option>L</option>
                                            <option>XL</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup className="form-quantity">
                                        <div className="quantity-text">Quantity:</div>
                                        <span onClick={(e) => countDown(e)}>&#8211;</span>
                                        <div className="quantity">{countProduct}</div>
                                        <span onClick={(e) => countUp(e)}>&#43;</span>
                                    </FormGroup>
                                    <FormGroup >
                                        <Button onClick={() => addToCart(product._id)}>Add to cart</Button>
                                    </FormGroup>
                                    <h3>
                                        Product Details
                            <FontAwesomeIcon icon={faIndent} />
                                    </h3>
                                    <p className="content-detail">
                                        {product.content}
                                    </p>
                                </Col>
                            </Row> :
                            <Row className="justify-content-between">
                                <Col md="6" className="ProductDetail-img">
                                    <div className="Product-not-load">
                                        <FontAwesomeIcon icon={faImage} size="10x" />
                                    </div>
                                </Col>
                                <Col md="6" >
                                </Col>
                            </Row>
                    }
                </Container>
                {
                    product ? <RelatedProduct category={product.category} productsAll={productsAll} title={product.title} products={products} />
                        : <Container className="RelatedProducts p-0">
                            <Row className="w-100 m-0">
                                <Col md="6">
                                    <h3 className="RelatedProducts-title title">Related Products</h3>
                                </Col>
                                <Col md="6">
                                    <NavLink href={`/products?category=`}>View More &#8594;</NavLink>
                                </Col>
                            </Row>
                            <Row className="w-100 m-0">
                                {
                                    images.map(product =>
                                        <Col md="3" className="Image-content" key={product}>
                                            <ImageNotLoaded />
                                        </Col>)
                                }
                            </Row>
                        </Container>
                }
            </Container >
            <Footer />
            <NotificationContainer />
        </Fragment>
    );

};