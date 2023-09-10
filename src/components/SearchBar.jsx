// import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

function SearchBar({ onSearch }) {
    
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = () => {
        onSearch(searchTerm)
    };

    return (
        <div>
            <input
                type='text'
                placeholder='Search for a post'
                value= {searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            </div>
    );
}

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
};


export default SearchBar;