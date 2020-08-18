import React, { useContext } from 'react';
import { Container, Button } from 'reactstrap';
import { CartContext } from '../../contexts/Cart';
import CartContent from './CartContent';
import './CartDetail.css';
import { Link } from 'react-router-dom';

const CartDetail = () => {
    const { cart, price, total } = useContext(CartContext);

    return (
        <Container className="CartDetail">
            {
                cart.length ? <CartContent cart={cart} price={price} total={total} /> :
                    <Container className="box-content">
                        Nothing products here.
                        <Button className="check-out">
                            <Link to="/shopping-cart">Go to shop &#8594;</Link>
                        </Button>
                    </Container>
            }
        </Container>
    );
};


export default CartDetail;