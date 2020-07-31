import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

import Image from '../../images/image1.png';
import './Banner.css';

const Banner = () => {
    return (
        <Container fluid={true} className="Banner">
            <Row className="align-items-center justify-content-around m-0">
                <Col md="6">
                    <h1>Give Your Workout<br />A New Style!</h1>
                    <p>Success isn't always about greatness. It's about consistency. Consistent hard work gains success. Greatness will come</p>
                    <Button>Explore Now &#8594;</Button>
                </Col>
                <Col md="6">
                    <img src={Image} alt="" />
                </Col>
            </Row>
        </Container>
    )
}

export default Banner;