// src/components/SearchField.js
import React from "react";
import "./SearchField.css";

const SearchField = ({ onSearchChange }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search movies..."
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};

export default SearchField;
