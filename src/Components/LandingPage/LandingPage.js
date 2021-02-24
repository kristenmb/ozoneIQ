import React, { useState } from 'react'
import './LandingPage.css'
import searchIcon from '../../assets/search.png'

function LandingPage() {
  const [currentLocation, setCurrentLocation] = useState('')
  const [chooseLocation, setChooseLocation] = useState('')

  return (
    <form>
      <button className='currentLocal'>Get Current Location</button>
      <section className='chooseLocal'>
        <input 
          type='text'
          placeholder='City, State'
          name='chooseLocation'
          value={chooseLocation}
          onChange={event => setChooseLocation(event.target.value)}
        />
        <img className='searchButton' src={searchIcon} />
      </section>
    </form>
    
  )
}

export default LandingPage