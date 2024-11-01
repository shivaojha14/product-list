// src/pages/HomePage.js
import { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import SearchFilter from '../components/SearchFilter';
import {GETALLPRODUCTS} from "../api"
import axios from "axios"
function HomePage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts=async()=> {
    try {
      const response = await axios.get(GETALLPRODUCTS);
      setProducts(response.data);
      setFilteredProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  useEffect(() => {
    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (category ? product.category === category : true)
    );
    setFilteredProducts(filtered);
  }, [searchQuery, category, products]);

  return (
    <div>
      <SearchFilter 
        setSearchQuery={setSearchQuery} 
        setCategory={setCategory} 
      />
      <div style={{marginTop:'2rem'}}>
      <ProductList products={filteredProducts} />
      </div>
    </div>
  );
}

export default HomePage;
