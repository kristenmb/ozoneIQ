import React, { useEffect, useState } from 'react'
import useLocalStorageState from 'use-local-storage-state'
import SavedLocalCards from '../SavedLocalCards/SavedLocalCards'
import './SavedLocations.scss'

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
  return savedLocations.map((location, index) => {
    return (
      <SavedLocalCards
        location={location[0]}
        key={index}
      />
    )
  })
}

useEffect(() => {
  getLocalStorage()
},[])

return (
  <section className='cards'>

    <section className='allSaved'>
      {createSavedCards()}
    </section>
  </section>
  )
}

export default SavedLocations
