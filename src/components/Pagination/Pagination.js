import React from 'react';
import { Pagination, PaginationItem, PaginationLink, Container } from 'reactstrap';
import './PaginationProduct.css';

const PaginationProduct = () => {
    return (
        <Container className="PaginationProduct">
            <Pagination size="lg" >
                <PaginationItem>
                    <PaginationLink previous href="#" />
                </PaginationItem>
                <PaginationItem >
                    <PaginationLink href="#">
                        1
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        2
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        3
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink next href="#" />
                </PaginationItem>
            </Pagination>
        </Container>
    );
}

export default PaginationProduct;