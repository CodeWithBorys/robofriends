import React from 'react';
import './search.css';

const Search = ({ searchChange }) => {
  return (
    <input
      type="search"
      name="search"
      id="searchBox"
      placeholder="find robots"
      onChange={searchChange}
    />
  );
};

export default Search;
