import React from 'react';
import '../searchBar.scss';
import  ResultNumber  from './resultNumber.jsx'

const SearchBar = ({ searchInput, handlerInput, data, isLoading, showResultNumber}) => {

  return (
    <div className='search-outer'>
        <input
              className='search-input'
              type="text"
              placeholder="Search Jokes..."
              value={searchInput}
              onChange={(e) => handlerInput(e.target.value)}
              aria-label="Search Jokes"
              autoFocus
            />
          { !isLoading && showResultNumber && <ResultNumber data={data || []} />}
    </div>)
};

export default SearchBar;
