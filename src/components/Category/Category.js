import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import './Category.css';

const Category = props => {
    const { Images } = props
    return (
        <Container className="Category p-0">
            <Row className="w-100">
                {
                    Images.map((image, index) =>
                        <Col md="4" key={index}>
                            <img src={image} alt="" />
                        </Col>
                    )
                }

            </Row>
        </Container>
    );
};


export default Category;