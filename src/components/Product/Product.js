import React, { Fragment } from 'react';

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
                        {
                            product.rating === 5 ?
                                <Fragment>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </Fragment>
                                : product.rating > 4 && product.rating < 5 ?
                                    <Fragment>
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStarHalfAlt} />
                                    </Fragment>
                                    : product.rating === 4 ?
                                        <Fragment>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                        </Fragment>
                                        : product.rating > 3 ?
                                            <Fragment>
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStarHalfAlt} />
                                            </Fragment>
                                            : <Fragment>
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                            </Fragment>

                        }
                    </div>
                    <p>${product.price}</p>
                </CardBody>
            </Card>
        </div>
    );
};

export default Product;