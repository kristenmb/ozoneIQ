import React, { useState, useEffect } from 'react'
import './LandingPage.scss'
import searchIcon from '../../assets/search.png'
import locationIcon from '../../assets/location.svg'
import logo from '../../assets/ozoneiq-color.png'
import locations from '../../assets/locations.png'
import questionmark from '../../assets/questionmark.png'
import { Link } from 'react-router-dom'

function LandingPage({grabUserLocationData, grabInputLocationData, error, backToLandingPage, clearErrorOnLandingPage}) {
  const [inputLocation, setInputLocation] = useState('');

  const parseInput = (inputLocation, event) => {
    const locationQueries = inputLocation.split(', ');
    const city = locationQueries[0];
    const state = locationQueries[1];
    const country = locationQueries[2];
    grabInputLocationData(city, state, country, event);
  }

  useEffect(() => {
    backToLandingPage();
  }, [])

  return (
    <section className='landingPage'>
      <div className='logoWrapper'>
        <img className='logo' src={logo} />
      </div>
      <form>
        <Link to='/dashboard'>
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
            placeholder='City, State, Country'
            name='chooseLocation'
            value={inputLocation}
            onChange={event => {
              setInputLocation(event.target.value);
              clearErrorOnLandingPage(event);
            }}
          />
          <Link to='/dashboard'>
            <img className='searchButton'
            src={searchIcon}
            onClick={event => parseInput(inputLocation, event)}/>
          </Link>
        </section>
        {error != '' && <p>{error}</p>}
      </form>
      <nav className='landing-page-nav'>
        <Link to='/saved-locations'
        className='landing-page-link'
        role='button'>
          <img className='footerIcon' src={locations} alt='saved locations'/>
        </Link>
        <Link to='/resources'
        className='landing-page-link'
        role='button'>
          <img className='footerIcon' src={questionmark} alt='more info'/>
        </Link>
        <Link to='/about-us'
        className='landing-page-link'
        role='button'>
          <p>...</p>
        </Link>
      </nav>
    </section>
  )
}

export default LandingPage
