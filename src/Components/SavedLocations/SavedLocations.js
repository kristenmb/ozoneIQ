import React, { useEffect, useState } from 'react'
import SavedLocalCards from '../SavedLocalCards/SavedLocalCards'
import './SavedLocations.scss'
import {Link} from 'react-router-dom'

const SavedLocations = ({grabInputLocationData, backToLandingPage}) => {
const [savedLocations, setSavedLocations] = useState([])

const getLocalStorage = () => {
  const localItems = Object.keys(localStorage)
    return localItems.map(item => {
      return JSON.parse(localStorage.getItem(item))
  })
}

const removeFromFavorites = (event) => {
   const localItems = Object.keys(localStorage)
    if (localItems.includes(event.target.id)) {
      localStorage.removeItem(event.target.id)
    }
    setSavedLocations(getLocalStorage())
}

useEffect(() => {
    setSavedLocations(getLocalStorage())
},[])

const createSavedCards = () => {
  const savedLocationsInStorage = getLocalStorage()
  return savedLocationsInStorage.map((location, index) => {
    return (
      <SavedLocalCards
        location={location}
        key={index}
        id={location.city}
        removeFromFavorites={removeFromFavorites}
        grabInputLocationData={grabInputLocationData}
      />
    )
  })
}

return (
  <section className='main'>
    <h2 className='text'>Saved Locations</h2>
      <p>To view current conditions, tap a location</p>
        {savedLocations.length <= 0 &&
          <p className='error-text'>No locations are currently saved, tap the star on your dashboard to save one.</p>
        }
        <section className='allSaved'>
          {createSavedCards()}
        </section>
      <Link to='/' onClick={backToLandingPage}>
        <button className='link-to-landing-page'>
          Choose a Location  
        </button>
      </Link>
  </section>
  )
}

export default SavedLocations
