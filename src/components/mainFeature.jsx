import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setQuery } from '../redux/searchSlice';
import { useGetResultsQuery } from '../redux/searchApi';
import  SearchBar from './searchBar.jsx'
import  Cards  from './cards.jsx'
import '../mainFeature.scss';
import useDebounce from '../hooks/useDebounce'

const MainFeature = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.search.query);
  const debouncedSearchInput = useDebounce(query, 1000);

  const { data: results, error, isLoading } = useGetResultsQuery(debouncedSearchInput, {
    skip: debouncedSearchInput.length < 4,
  });

  const handlerInput = (newQuery) => {
    dispatch(setQuery(newQuery));
  };

  console.log(error);

  return (
   <section className='searchSection'>
      <SearchBar searchInput={query} handlerInput={handlerInput} data={results?.result || []} isLoading={isLoading} showResultNumber={query.length > 3 && !!results}/>
      { !isLoading && query.length > 3 && <Cards data={results?.result || []} />}
      {isLoading && <div>Loading...</div>}
    </section>
    )
};

export default MainFeature;
