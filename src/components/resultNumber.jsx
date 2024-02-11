import React from 'react';
import '../resultNumber.scss';

const ResultNumber = ({data}) => {

  return (
    <div className='result-block'>Found jokes: {data.length}</div>
  )

}

export default ResultNumber;
