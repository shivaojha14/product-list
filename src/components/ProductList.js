// src/components/ProductList.js
import ProductCard from './ProductCard';
import "./ProductCard.css"
function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
