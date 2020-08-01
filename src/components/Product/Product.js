import React from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle
} from 'reactstrap';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

import './Product.css';

const Product = () => {
    return (
        <div className="Product">
            <Card>
                <CardImg top width="100%" src="http://lorempixel.com/150/200/" alt="" />
                <CardBody>
                    <CardTitle>Red Printed T-shirt</CardTitle>
                    <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStarHalfAlt} />
                    </div>
                    <p>$50.00</p>
                </CardBody>
            </Card>
        </div>
    );
};

export default Product;