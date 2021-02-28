import React from 'react';
import './SavedLocalCards.scss'
import { Link } from 'react-router-dom'

const SavedLocalCards = ({location}) => {

  return (
    <Link className='savedCard' to='/dashboard/current-location'>
      <article className='savedCard'>
        <h1 className='location'>{location.city}, {location.state}, {location.country}</h1>
        <p className='aqi'>{location.current.pollution.aqius}</p>
      </article>
    </Link>
  
  )
}

export default SavedLocalCards