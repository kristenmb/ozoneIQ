import React, { useEffect, useState } from 'react'
import SavedLocalCards from '../SavedLocalCards/SavedLocalCards'
import './SavedLocations.scss'

const SavedLocations = () => {

const getLocalStorage = () => {
  const localItems = Object.keys(localStorage)
    return localItems.map(item => {
      return JSON.parse(localStorage.getItem(item))
  })
}

const createSavedCards = () => {
  const savedLocations = getLocalStorage()
  return savedLocations.map((location, index) => {
    return (
      <SavedLocalCards
        location={location}
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
