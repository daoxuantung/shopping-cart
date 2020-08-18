import React, { useState, Fragment } from 'react';
import classNames from 'classnames';
import { Container, Col, Row, Button } from 'reactstrap';
import Footer from './../components/Footer/Footer';

import Image from '../images/image1.png';
import '../App.css';
import { Link } from 'react-router-dom';
const Account = () => {
    const [position, setPosition] = useState(false);

    const handleFormLogin = () => {
        setPosition(true);
    }
    const handleFormRegister = () => {
        setPosition(false);
    }
    return (
        <Fragment>
            <div className="Account">
                <Container>
                    <Row>
                        <Col md="6">
                            <img src={Image} alt="" width="100%" />
                        </Col>
                        <Col md="6">
                            <div className="Account-form">
                                <div className="form-btn">
                                    <span onClick={() => handleFormLogin()}>Login</span>
                                    <span onClick={() => handleFormRegister()}> Register</span>
                                    <hr className={classNames('border-bottom', { transform: position })}></hr>
                                </div>

                                <form className={classNames('form-login', { show: position })}>
                                    <input type="text" placeholder="Username" />
                                    <input type="password" placeholder="Password" />
                                    <Button type="submit">Login</Button>
                                    <Link to="/shopping-cart/account">Forgot password?</Link>
                                </form>

                                <form className={classNames('form-register', { hidden: position })}>
                                    <input type="text" placeholder="Username" />
                                    <input type="text" placeholder="Email" />
                                    <input type="password" placeholder="Password" />
                                    <Button type="submit">Register</Button>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div >
            <Footer />
        </Fragment>
    );
};

export default Account;