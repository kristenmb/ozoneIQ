import React from 'react';
import './SavedLocalCards.scss'

const SavedLocalCards = ({location}) => {
  return (
    <article className='savedCards'>
      <h1 className='city'>{location.city}, {location.state}, {location.country}</h1>
      <p>{location.current.pollution.aqius}</p>
    </article>
  )
}

export default SavedLocalCards