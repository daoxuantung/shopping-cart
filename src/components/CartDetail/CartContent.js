import React, { Fragment } from 'react';
import { Table, Input, Form, Button } from 'reactstrap';
import './CartDetail.css';

const CartDetail = props => {
    const { cart, price, total } = props;

    return (
        <Fragment>
            <Table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Size</th>
                        <th>Quantiny</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map(item =>
                            <tr>
                                <td>
                                    <div className="cart-info">
                                        <img src={item.imageUrl} alt="dsa" />
                                        <div>
                                            <p>T-shirt</p>
                                            <small>Price: ${item.price}</small>
                                            <a href="/">Remove</a>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.sized}
                                </td>

                                <td>
                                    <Input type="number" value={item.count}></Input>
                                </td>
                                <td>${item.price * item.count}</td>
                            </tr>)
                    }
                </tbody>
            </Table>
            <div className="total-price">
                <table>
                    <tbody>
                        <tr>
                            <td>Sub</td>
                            <td>${price}</td>
                        </tr>
                        <tr>
                            <td>Tax</td>
                            <td>$15</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>${total}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Form className="cart-check">
                <Button className="check-out">
                    Proceed to checkout &#8594;
                </Button>
            </Form>
        </Fragment>
    );
};


export default CartDetail;