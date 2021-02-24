import React, { useState } from 'react'
import './LandingPage.css'
import searchIcon from '../../assets/search.png'
import sun from '../../assets/sun.svg'

function LandingPage() {
  const [currentLocation, setCurrentLocation] = useState('')
  const [chooseLocation, setChooseLocation] = useState('')

  return (
    <section className='landingPage'>
      <h1 className='title'>OzoneIQ</h1>
      <div className='sunWrapper'>
        <img className='sun' src={sun} />
      </div>
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
    </section>
    
  )
}

export default LandingPage