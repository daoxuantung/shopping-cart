import React from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle
} from 'reactstrap';

import './Product.css';

const Product = () => {
    return (
        <div className="Product">
            <Card>
                <CardImg top width="100%" src="http://lorempixel.com/150/200/" alt="" />
                <CardBody>
                    <CardTitle>Red Printed T-shirt</CardTitle>
                    <div className="Product-rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                    </div>
                    <p>$50.00</p>
                </CardBody>
            </Card>
        </div>
    );
};

export default Product;