import React from 'react';
import './Image.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

const ImageNotLoaded = () => {
    return (
        <div className="ImageNotLoaded">
            <FontAwesomeIcon icon={faImage} size="5x" />
        </div>
    );
};


export default ImageNotLoaded;