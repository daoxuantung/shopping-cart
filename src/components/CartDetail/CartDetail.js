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
                        <th scope="row">Product name</th>
                        <td>
                            <Input type="number" value="1"></Input>
                        </td>
                        <td>$50.00</td>
                    </tr>
                    <tr>
                        <th scope="row">Product name</th>
                        <td>
                            <Input type="number" value="1"></Input>
                        </td>
                        <td>$50.00</td>
                    </tr>
                    <tr>
                        <th scope="row">Product name</th>
                        <td>
                            <Input type="number" value="1"></Input>
                        </td>
                        <td>$50.00</td>
                    </tr>
                    <tr>
                        <th scope="row">Product name</th>
                        <td>
                            <Input type="number" value="1"></Input>
                        </td>
                        <td>$50.00</td>
                    </tr>
                    <tr>
                        <th scope="row">Product name</th>
                        <td>
                            <Input type="number" value="1"></Input>
                        </td>
                        <td>$50.00</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
};


export default CartDetail;