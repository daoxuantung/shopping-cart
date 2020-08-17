import React, { useContext } from 'react';
import { Container, Table, Input, Form, Button } from 'reactstrap';
import { CartContext } from '../../contexts/Cart';
import './CartDetail.css';

const CartDetail = () => {
    const { cart, price, total } = useContext(CartContext);

    return (
        <Container className="CartDetail">
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
                <Button className="check-out"> Check out</Button>
            </Form>
        </Container>
    );
};


export default CartDetail;