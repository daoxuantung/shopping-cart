import React from 'react';
import { Container, Table, Input } from 'reactstrap';

import './CartDetail.css';

const CartDetail = () => {
    return (
        <Container className="CartDetail">
            <Table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantiny</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className="cart-info">
                                <img src="/" alt="dsa" />
                                <div>
                                    <p>T-shirt</p>
                                    <small>Price: $50.50</small>
                                    <a href="/">Remove</a>
                                </div>
                            </div>
                        </td>
                        <td>
                            <Input type="number" value="1"></Input>
                        </td>
                        <td>$50.00</td>
                    </tr>
                    <tr>
                        <td>
                            <div className="cart-info">
                                <img src="" alt="" />
                                <div>
                                    <p>T-shirt</p>
                                    <small>Price: $50.50</small>
                                    <a href="/">Remove</a>
                                </div>
                            </div>
                        </td>
                        <td>
                            <Input type="number" value="1"></Input>
                        </td>
                        <td>$50.00</td>
                    </tr>      <tr>
                        <td>
                            <div className="cart-info">
                                <img src="" alt="" />
                                <div>
                                    <p>T-shirt</p>
                                    <small>Price: $50.50</small>
                                    <a href="/">Remove</a>
                                </div>
                            </div>
                        </td>
                        <td>
                            <Input type="number" value="1"></Input>
                        </td>
                        <td>$50.00</td>
                    </tr>
                </tbody>
            </Table>
            <div className="total-price">
                <table>
                    <tbody>
                        <tr>
                            <td>Subtotal</td>
                            <td>$200.00</td>
                        </tr>
                        <tr>
                            <td>Tax</td>
                            <td>$15.00</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>$215.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Container>
    );
};


export default CartDetail;