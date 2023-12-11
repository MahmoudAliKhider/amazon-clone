import React from 'react';
import { useAuth } from './../../context/GlobalState';
import starIcon from './../../images/icons/star.png';
import './Product.css';

const Product = ({ title, price, image, rating, id }) => {
    const { dispatch } = useAuth();

    return (
        <div className="product">
            <div className="product-info">
                <p>{title}</p>
                <p className="product-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
            </div>
            <div className="product-rating">
                {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p key={i}>
                            <img src={starIcon} alt=''/>
                        </p>
                    ))}
            </div>

            <img src={image} alt='product-img' />
            <button>Add to Basket</button>
        </div>
    )
}

export default Product