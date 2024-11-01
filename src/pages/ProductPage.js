// src/pages/ProductPage.js
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GETALLPRODUCTS } from "../api";
import axios from "axios";
import "./ProductPage.css"; // Import custom CSS

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`${GETALLPRODUCTS}/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-page-container">
      <button onClick={() => navigate("/")} className="back-button">
        &larr; Back to Products
      </button>
      <div className="product-card">
        <img src={product.image} alt={product.title} />
        <div className="product-details">
          <h1 className="product-title">{product.title}</h1>
          <p className="product-description">{product.description}</p>
          <p className="product-category">Category: {product.category}</p>
          <p className="product-price">Price: ${product.price}</p>
          <div className="product-rating">
            <span className="rating-star">&#9733;</span>
            <span>Rating: {product.rating?.rate}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
