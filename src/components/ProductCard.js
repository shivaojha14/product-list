import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>
        <Link to={`/product/${product.id}`}>{product.title}</Link>
      </h3>
      <p className="price">${product.price}</p>
      <p className="description">{product.description.substring(0, 50)}...</p>
    </div>
  );
}

export default ProductCard;
