import React, { useEffect, useState } from 'react'
import useLocalStorageState from 'use-local-storage-state'
import SavedLocalCards from '../SavedLocalCards/SavedLocalCards'

const SavedLocations = () => {
  const [savedLocations, setSavedLocations] = useState([])

const getLocalStorage = () => {
  const localItems = Object.keys(localStorage)
   localItems.forEach((item,  i) => {
    setSavedLocations(prevState => ([...prevState, JSON.parse(localStorage.getItem(item))])
  )
  
})
}

const createSavedCards = () => {
  console.log('hey')
  return savedLocations.map((location, index) => {
    console.log(location)
    return (
      <SavedLocalCards
        location={location.city}
        key={index}
      />
    )
  })
}

useEffect(() => {
  getLocalStorage()
},[])

  return (
    <section className='allSaved'>
      {createSavedCards()}
    </section>
  )
}

export default SavedLocations