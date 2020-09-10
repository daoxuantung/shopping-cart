import React from 'react';
import { Container, Button } from 'reactstrap';

import './PaginationProduct.css';

const PaginationProduct = () => {

    return (
        <Container className="PaginationProduct">
            <Button >Prev</Button>
            <Button >Next</Button>
        </Container>
    );
}

export default PaginationProduct;