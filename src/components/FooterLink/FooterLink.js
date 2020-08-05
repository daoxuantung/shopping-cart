import React from 'react';
import { Col } from 'reactstrap';

import './FooterLink.css';

const FooterLink = (props) => {
    const { data } = props;

    return (
        <Col xs="6" className="FooterLink p-0">
            <h4>{data.title}</h4>
            <ul>
                {
                    data.contents.map((content, index) =>
                        <li key={index} >
                            <a href="/shopping-cart">{content}</a>
                        </li>
                    )
                }
            </ul>
        </Col>
    );
};


export default FooterLink;