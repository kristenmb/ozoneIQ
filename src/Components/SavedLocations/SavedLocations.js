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
  <>
    <h2>Saved Locations</h2>
      <section className='cards'>
        <section className='allSaved'>
          {createSavedCards()}
        </section>
          <Link to='/' className='link-to-landing-page' onClick={backToLandingPage}>Choose a Location</Link>
      </section>
  </>
  )
}

export default SavedLocations
