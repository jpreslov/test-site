import React from 'react';
import gif from '../assets/gif.gif';
import star from '../assets/star.gif'

const Logo = () => {
    return (
        <div className="gif-container">
            <img className="star" src={star} alt="star gif" />
            <img src={gif} alt="gif" />
            <img className="star" src={star} alt="star gif" />
        </div>
    )
}

export default Logo;