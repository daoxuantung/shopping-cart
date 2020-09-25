import React, { useContext } from 'react';
import { Container, NavLink } from 'reactstrap';
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
                        <NavLink href="/">Go to shop &#8594;</NavLink>
                    </Container>
            }
        </Container>
    );
};


export default CartDetail;