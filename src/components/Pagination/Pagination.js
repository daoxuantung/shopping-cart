import React, { useContext } from 'react';
import { ProductContext } from '../../contexts/Product';
import { Pagination } from 'react-bootstrap';
import { Container } from 'reactstrap';

import './PaginationProduct.css';

const PaginationComponent = () => {
    const { handleSelect, handleButtonNext, handleButtonPrev, filters, totalPages } = useContext(ProductContext);
    const currentPage = filters.page;
    let items = [];
    if (currentPage < 3) {
        for (let number = 1; number <= 3; number++) {
            items.push(
                <Pagination.Item key={number} active={number === currentPage} onClick={() => handleSelect(number)}>
                    {number}
                </Pagination.Item>,
            );
        }
    } else if (currentPage === totalPages) {
        for (let number = currentPage - 2; number <= totalPages; number++) {
            items.push(
                <Pagination.Item key={number} active={number === currentPage} onClick={() => handleSelect(number)}>
                    {number}
                </Pagination.Item>,
            );
        }
    } else {
        for (let number = currentPage - 1; number <= currentPage + 1; number++) {
            items.push(
                <Pagination.Item key={number} active={number === currentPage} onClick={() => handleSelect(number)}>
                    {number}
                </Pagination.Item>,
            );
        }
    }

    return (
        <Container className="Pagination p-0">
            <Pagination size="md" className="m-0">
                <Pagination.Item onClick={() => handleButtonPrev()}>&#60;</Pagination.Item>
                {items}
                <Pagination.Item onClick={() => handleButtonNext()}>&#62;</Pagination.Item>
            </Pagination>
        </Container>
    );
}

export default PaginationComponent;