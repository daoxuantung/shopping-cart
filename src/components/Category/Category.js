import React from 'react';
import { Container, Row, Col, NavLink } from 'reactstrap';

import Image1 from '../../images/category-1.jpg';
import Image2 from '../../images/category-2.jpg';
import Image3 from '../../images/category-3.jpg';

import './Category.css';
const Category = props => {

    const images = [
        {
            src: Image1,
            category: "shirt",
            title: "Shirt"
        },
        {
            src: Image2,
            category: "dress",
            title: "Dress"
        },
        {
            src: Image3,
            category: "sweater",
            title: "Sweater"
        }]
    return (
        <Container className="Category p-0">
            <Row className="w-100">
                {
                    images.map((image, index) =>
                        <Col md="4" key={index}>
                            <NavLink href={`/shopping-cart/products?category=${image.category}`} title={image.title}>
                                <img src={image.src} alt="" />
                            </NavLink>
                        </Col>
                    )
                }
            </Row>
        </Container>
    );
};


export default Category;