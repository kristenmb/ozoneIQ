import React from 'react';
import './SavedLocalCards.scss'

const SavedLocalCards = ({location}) => {
  return (
    <article className='savedCard'>
      <h1 className='location'>{location.city}, {location.state}, {location.country}</h1>
      <p className='aqi'>{location.current.pollution.aqius}</p>
    </article>
  
  )
}

export default SavedLocalCards