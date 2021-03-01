import React, { useEffect, useState } from 'react'
import SavedLocalCards from '../SavedLocalCards/SavedLocalCards'
import './SavedLocations.scss'


const SavedLocations = ({grabInputLocationData}) => {

const [savedLocations, setSavedLocations] = useState([])
console.log(savedLocations)


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
  // return savedLocations.filter(location => {
    
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

// useEffect(() => {
//   getLocalStorage()
// },[])

return (
  <section className='cards'>
    <section className='allSaved'>
      {createSavedCards()}
    </section>
  </section>
  )
}

export default SavedLocations
