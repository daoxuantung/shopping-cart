import React from 'react';

import {
    Card, CardImg, CardBody,
    CardTitle
} from 'reactstrap';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

import './Product.css';

const Product = (props) => {
    const { product } = props;

    return (
        <div className="Product">
            <Card>
                <CardImg top width="100%" src={product.imageUrl} alt="" />
                <CardBody>
                    <CardTitle>{product.tittle}</CardTitle>
                    <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStarHalfAlt} />
                    </div>
                    <p>${product.price}</p>
                </CardBody>
            </Card>
        </div>
    );
};

export default Product;