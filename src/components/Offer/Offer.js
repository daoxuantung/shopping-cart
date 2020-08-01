import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

import ExclusiveImage from '../../images/exclusive.png';
import './Offer.css';

const Offer = () => {
    return (
        <Container fluid={true} className="Offer">
            <Container className="p-0">
                <Row className="justify-content-around align-items-center">
                    <Col md="6" className="h-5">
                        <img src={ExclusiveImage} className="Offer-image" alt="" />
                    </Col>
                    <Col md="6" className="Offer-content">
                        <h6>Exclusively Available on RedStore</h6>
                        <h1>Smart Band 4</h1>
                        <p className="Offer-text">The Mi Smart Band 4 features a 39.9% larger (than Mi Band 3) AMOLED color full-touch display with adjustable brightness, so every thing is clear as an be.</p>
                        <Button>Buy Now &#8594;</Button>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};


export default Offer;