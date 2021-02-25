import React, { useState, useEffect } from 'react'
import './LandingPage.css'
import searchIcon from '../../assets/search.png'
import sun from '../../assets/sun.svg'
import locationIcon from '../../assets/location.svg'
import logo from '../../assets/logo4.png'

function LandingPage({grabUserLocationData, grabInputLocationData}) {
  const [inputLocation, setInputLocation] = useState('')

  const parseInput = (inputLocation, event) => {
    const locationQueries = inputLocation.split(', ');
    const city = locationQueries[0];
    const state = locationQueries[1];
    const country = locationQueries[2];
    grabInputLocationData(city, state, country, event);
  }

  return (
    <section className='landingPage'>
      <div className='sunWrapper'>
        <img className='sun' src={logo} />
      </div>
      {/* <h1 className='title'>OzoneIQ</h1> */}
      <form>
        <button
          className='currentLocal'
          onClick={grabUserLocationData}>
          <img className='locationIcon' src={locationIcon}/>
          Current Location
        </button>
        <section className='chooseLocal'>
          <input
            type='text'
            placeholder='City, State'
            name='chooseLocation'
            value={inputLocation}
            onChange={event => setInputLocation(event.target.value)}
          />
          <img className='searchButton'
           src={searchIcon}
           onClick={event => parseInput(inputLocation, event)}/>
        </section>
      </form>
    </section>

  )
}

export default LandingPage
