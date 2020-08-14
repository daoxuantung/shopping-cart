import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import Image1 from '../../images/category-1.jpg';
import Image2 from '../../images/category-2.jpg';
import Image3 from '../../images/category-3.jpg';

import './Category.css';
const Category = props => {

    const images = [
        {
            src: Image1,
            category: "trousers"
        },
        {
            src: Image2,
            category: "shoes"
        },
        {
            src: Image3,
            category: "thirts"
        }]
    return (
        <Container className="Category p-0">
            <Row className="w-100">
                {
                    images.map((image, index) =>
                        <Col md="4" key={index}>
                            <Link to={`/shopping-cart/products?category=${image.category}`}>
                                <img src={image.src} alt="" />
                            </Link>
                        </Col>
                    )
                }
            </Row>
        </Container>
    );
};


export default Category;