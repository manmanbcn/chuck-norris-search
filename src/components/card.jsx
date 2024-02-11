import React from 'react';
import '../card.scss';

const Card = ({data}) => {
  const dateOnly = data.created_at.split(' ')[0];

  return (
      <>
        <div className='cardText'>
          <span>{data.value}</span>
        </div>
        <div className='cardFooter'>
          <div className='cardId'>{data.id}</div>
          <div className='cardDate'>{dateOnly}</div>
        </div>
      </>
  )
}

export default Card;
