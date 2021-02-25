import React, { useState, useEffect } from 'react'
import './LandingPage.css'
import searchIcon from '../../assets/search.png'
import sun from '../../assets/sun.svg'
import locationIcon from '../../assets/location.svg'
import {fetchUserLocation} from '../../utilities'

function LandingPage() {
  const [currentLocation, setCurrentLocation] = useState('')
  const [chooseLocation, setChooseLocation] = useState('')

  useEffect(() => {
    fetchUserLocation()
      .then(response => console.log(response))
  }, [])

  return (
    <section className='landingPage'>
      <h1 className='title'>OzoneIQ</h1>
      <div className='sunWrapper'>
        <img className='sun' src={sun} />
      </div>
      <form>
        <button
          className='currentLocal'>
          <img className='locationIcon' src={locationIcon}/>
          Current Location
        </button>
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
    </section>

  )
}

export default LandingPage
