import React, { useContext } from 'react';
import { Container, Button, NavLink } from 'reactstrap';
import { CartContext } from '../../contexts/Cart';
import CartContent from './CartContent';
import './CartDetail.css';

const CartDetail = () => {
    const { cart, price, total, removeItem, changeAmount } = useContext(CartContext);

    return (
        <Container className="CartDetail">
            {
                cart.length ? <CartContent changeAmount={changeAmount} cart={cart} price={price} total={total} removeItem={removeItem} />
                    : <Container className="box-content">
                        Nothing products here.
                        <Button className="check-out">
                            <NavLink href="/shopping-cart">Go to shop &#8594;</NavLink>
                        </Button>
                    </Container>
            }
        </Container>
    );
};


export default CartDetail;