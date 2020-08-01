import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

import ImageUser1 from '../../images/user-1.png';
import ImageUser2 from '../../images/user-2.png';
import ImageUser3 from '../../images/user-3.png';

import './Testimonial.css';

function Testimonial() {
    const ImageUsers = [ImageUser1, ImageUser2, ImageUser3];

    return (
        <Container className="Testimonial pl-0 pr-0">
            <Row className="w-100 m-0">
                {
                    ImageUsers.map((imageUser, index) =>
                        <Col md="6" key={index}>
                            <FontAwesomeIcon icon={faQuoteLeft} />
                            <p>Consider now provided laughter boy landlord dashwood. Often voice and the spoke. No shewing fertile village equally prepare up females as an. Often voice and the spoke.</p>
                            <div className="rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStarHalfAlt} />
                            </div>
                            <img src={imageUser} alt="" />
                            <h4>Mike Smith</h4>
                        </Col>)
                }
            </Row>
        </Container >
    );
}

export default Testimonial;