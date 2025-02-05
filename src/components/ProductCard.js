import React from 'react';
import './ProductCard.css';

const ProductCard = ({ image, title, description, price }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <div className="product-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <p className="price">Price: ${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
