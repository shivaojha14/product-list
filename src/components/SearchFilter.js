// src/components/SearchFilter.js
import './SearchFilter.css';

function SearchFilter({ setSearchQuery, setCategory }) {
  return (
    <div className="search-filter-container">
      <input
        type="text"
        placeholder="Search by name..."
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />
      <select
        onChange={(e) => setCategory(e.target.value)}
        className="category-select"
        style={{marginLeft:'2rem'}}
      >
        <option value="">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelry</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
      </select>
    </div>
  );
}

export default SearchFilter;
