import React, { useState } from 'react'
import './LandingPage.scss'
import searchIcon from '../../assets/search.png'
import sun from '../../assets/sun.svg'
import locationIcon from '../../assets/location.svg'
import logo from '../../assets/ozoneiq-color.png'

function LandingPage() {
  const [currentLocation, setCurrentLocation] = useState('')
  const [chooseLocation, setChooseLocation] = useState('')

  return (
    <section className='landingPage'>
      <div className='sunWrapper'>
        <img className='sun' src={logo} />
      </div>
      {/* <h1 className='title'>OzoneIQ</h1> */}
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