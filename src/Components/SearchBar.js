import React, { useState } from 'react';

const SearchBar = ({ searchYelp }) => {
    const [term, setTerm] = useState('');
    const [location, setLocation] = useState('');
  
    const handleTermChange = (event) => {
      setTerm(event.target.value);
    };
  
    const handleLocationChange = (event) => {
      setLocation(event.target.value);
    };
  
    const handleSearch = () => {
      // Call the searchYelp function with search term and location
      searchYelp(term, location);
    };
  
    return (
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Businesses"
          value={term}
          onChange={handleTermChange}
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={handleLocationChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    );
  };
  
  export default SearchBar;