import React from 'react';

import { Container, Row, Col } from 'reactstrap';
import './Brand.css';

import brand1 from '../../images/logo-godrej.png';
import brand2 from '../../images/logo-oppo.png';
import brand3 from '../../images/logo-coca-cola.png';
import brand4 from '../../images/logo-paypal.png';
import brand5 from '../../images/logo-philips.png';

const Brand = () => {
    const brands = [brand1, brand2, brand3, brand4, brand5]
    return (
        <Container className="p-0 Brand">
            <Row className="justify-content-between w-100 m-0">
                {
                    brands.map((brand, index) =>
                        <Col md="2" key={index}>
                            <img src={brand} alt="" />
                        </Col>)
                }
            </Row>
        </Container>
    );
};

export default Brand;