import React, { useState, useEffect } from 'react'
import './LandingPage.scss'
import searchIcon from '../../assets/search.png'
import locationIcon from '../../assets/location.svg'
import logo from '../../assets/ozoneiq-color.png'
import { Link } from 'react-router-dom'

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
      <form>
        <Link to='/dashboard/current-location'>
          <button
            className='currentLocal'
            onClick={grabUserLocationData}>
            <img className='locationIcon' src={locationIcon}/>
            Current Location
          </button>
        </Link>
        <section className='chooseLocal'>
          <input
            type='text'
            placeholder='Taos, New Mexico, USA'
            name='chooseLocation'
            value={inputLocation}
            onChange={event => setInputLocation(event.target.value)}
          />
          <Link to='/dashboard/chosen-location'>
            <img className='searchButton'
            src={searchIcon}
            onClick={event => parseInput(inputLocation, event)}/>
          </Link>
        </section>
      </form>
    </section>
  )
}

export default LandingPage
