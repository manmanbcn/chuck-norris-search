import React from 'react';
import  Card  from './card.jsx'
import '../cards.scss';

const Cards = ({data}) => {

  return (
    <div className='cardsList'>
      {data.map((item, index) => {
       return (
        <a key={item.id} href={item.url} target="_blank" rel="noopener noreferrer" className={`card ${index < 2 ? 'first-row' : ''}`} >
          <Card data={item}/>
        </a>
       )
      }
      )}
    </div>
  )

}

export default Cards;
