import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.scss';
import pollutionIcon from '../../assets/pollution.png';
import humidityIcon from '../../assets/humidity.png';
import pressureIcon from '../../assets/pressure.png';
import windIcon from '../../assets/wind.png';
import emptyFavIcon from '../../assets/star-empty.png';
import filledFavIcon from '../../assets/Five_Pointed_Star_Solid.svg'
import {convertToFahrenheit, convertWindToCardinalDirection, convertMsToMph, displayCorrectWeatherIcon, airQualityMessages} from '../../utilities.js';

function Dashboard({location, backToLandingPage}) {
  const [isStarred, setIsStarred] = useState(false)

  const locationAqi = location.current.pollution.aqius;
  const tempInFahrenheit = convertToFahrenheit(location.current.weather.tp);
  const windDirection = convertWindToCardinalDirection(location.current.weather.wd);
  const windMph = convertMsToMph(location.current.weather.ws);
  const weatherIconWithAltText = displayCorrectWeatherIcon(location.current.weather.ic);

const toggleStar = () => {
  setIsStarred(isStarred => !isStarred)
  const jsonLocation = JSON.stringify(location)
    if(localStorage.getItem(`${location.city}`) === null) {
      localStorage.setItem(`${location.city}`, jsonLocation)
    }
    if(isStarred) {
      localStorage.removeItem(`${location.city}`)
    }
}

useEffect(() => {
  setIsStarred(false)
  const localStorageKeys = Object.keys(localStorage)
    if (localStorageKeys.includes(location.city)) {
      setIsStarred(true)
    } 
}, [location])

  return (
    <section className='main-dashboard'>
      <article className='location-name-temp-container'>
        <div className='location-and-fav-container'>
          <article className="location-details">
            <img 
                className='location-icon icon' 
                onClick={toggleStar} 
                src={isStarred ? filledFavIcon : emptyFavIcon} 
                alt='favorited star'/>
            <h2 className='location-name'>{`${location.city}, ${location.state}`}</h2>
          </article>
          <Link to='/' className='choose-diff-location' onClick={backToLandingPage}>Choose a different location</Link>
        </div>
        <div className='temp-container'>
          <img className='weather-icon icon' src={weatherIconWithAltText[0]} alt={weatherIconWithAltText[1]}/>
          <p className='temperature'>{`${tempInFahrenheit} F`}</p>
        </div>
      </article>
      <article className='aqi-container'>
        <h1 className='aqi-level'>{airQualityMessages(locationAqi)[0]}</h1>
        <div className={`aqi-number ${airQualityMessages(locationAqi)[0]}`}>{locationAqi}</div>
        <p className='aqi-description'>{airQualityMessages(locationAqi)[1]}</p>
      </article>
      <article className='additional-info-container'>
        <div className='additional-info'>
          <img className='pollutant-icon icon' src={pollutionIcon} alt='Outline of smoke stack'/>
          <p className='pollutant'>{location.current.pollution.mainus}</p>
        </div>
        <div className='additional-info'>
          <img className='humidity-icon icon' src={humidityIcon} alt='Outline of rain drop'/>
          <p className='humidity'>{`${location.current.weather.hu}`}</p>
        </div>
        <div className='additional-info'>
          <img className='pressure-icon icon' src={pressureIcon} alt='Outline of a pressure guage'/>
          <p className='pressure'>{`${location.current.weather.pr} hPa`}</p>
        </div>
        <div className='additional-info'>
          <img className='wind-icon icon' src={windIcon} alt='Outline of wind blowing'/>
          <p className='wind'>{`${windMph} mph ${windDirection}`}</p>
        </div>
      </article>
    </section>
  )
}
export default Dashboard
