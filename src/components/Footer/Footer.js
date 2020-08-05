import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import Logo from '../../images/logo-white.png'
import FooterLink from '../FooterLink/FooterLink';

import './Footer.css';
import Logo1 from '../../images/play-store.png';
import Logo2 from '../../images/app-store.png';

const Footer = () => {
    const datas = [
        {
            title: 'Useful Links',
            contents: ['Coupon', 'Blog Post', 'Return Pocily', 'Join Affiliate']
        },
        {
            title: 'Follow us',
            contents: ['Facebook', 'Twitter', 'Instagram', 'Youtube']
        }
    ]

    return (
        <footer className="Footer">
            <Container className="p-0">
                <Row className="w-100 m-0 justify-content-between">
                    <Col md="6" lg="4" >
                        <h4>Download your app</h4>
                        <p>Download App for Android and IOS mobile phone</p>
                        <div className="Footer-logo">
                            <img src={Logo1} alt="" />
                            <img src={Logo2} alt="" />
                        </div>
                    </Col>
                    <Col md="6" lg="4" className="p-0">
                        <img src={Logo} alt="" />
                        <p>Our purpose is to sustainably make the pleasure and benefits of sports accessible to the many</p>
                    </Col>
                    <Col md="12" lg="4" className="p-0">
                        <Row className="w-100 m-0">
                            {
                                datas.map((data, index) => <FooterLink key={index} data={data} />)
                            }
                        </Row>
                    </Col>
                </Row>
                <hr></hr>
                <p className="copyright">Copyright 2020 - LePis</p>
            </Container>
        </footer>
    );
};

export default Footer;