import React, { Fragment } from 'react';
import { Table, Input, Form, Button, FormGroup } from 'reactstrap';
import './CartDetail.css';

const CartDetail = props => {
    const { cart, price, total, removeItem, changeAmount } = props;

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
                        cart.map((item, index) =>
                            <tr key={index}>
                                <td>
                                    <div className="cart-info">
                                        <img src={item.imageUrl} alt="dsa" />
                                        <div className="cart-text">
                                            <p>T-shirt</p>
                                            <small>Price: ${item.price}</small>
                                            <button onClick={() => removeItem(index)}>
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <FormGroup className="Cart-form">
                                        <Input
                                            type="select"
                                            name="select"
                                            id="size">
                                            <option>S</option>
                                            <option>M</option>
                                            <option>L</option>
                                            <option>XL</option>
                                        </Input>
                                    </FormGroup>
                                </td>

                                <td>
                                    <Input type="number" value={item.count} min="1" max="99" onChange={(e) => changeAmount(e.target.value, item)}></Input>
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
        </Fragment >
    );
};


export default CartDetail;