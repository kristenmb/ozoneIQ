import React, { useEffect, useState } from 'react'
import useLocalStorageState from 'use-local-storage-state'

const SavedLocations = () => {
  const [savedLocations, setSavedLocations] = useState([])

const getLocalStorage = () => {
  const localItems = Object.keys(localStorage)
   localItems.forEach((item,  i) => {
    setSavedLocations(prevState => ([...prevState, JSON.parse(localStorage.getItem(item))])
  )
  
  console.log(savedLocations)
})
}

useEffect(() => {
  getLocalStorage()
},[])

  return (
    <h2>saved</h2>
  )
}

export default SavedLocations