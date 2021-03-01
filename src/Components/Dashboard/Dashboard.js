import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.scss';
import locationIcon from '../../assets/location.svg';
import pollutionIcon from '../../assets/pollution.png';
import humidityIcon from '../../assets/humidity.png';
import pressureIcon from '../../assets/pressure.png';
import windIcon from '../../assets/wind.png';
import emptyFavIcon from '../../assets/star-empty.png';
import clearSkyDayIcon from '../../assets/clear-sky-day.png';
import clearSkyNightIcon from '../../assets/clear-sky-night.png';
import fewCloudsDayIcon from '../../assets/few-clouds-day.png';
import fewCloudsNightIcon from '../../assets/few-clouds-night.png';
import scatteredCloudsIcon from '../../assets/scattered-clouds.png';
import brokenCloudsIcon from '../../assets/broken-clouds.png';
import showerRainIcon from '../../assets/shower-rain.png';
import rainDayIcon from '../../assets/rain-day.png';
import rainNightIcon from '../../assets/rain-night.png';
import {convertToFahrenheit, convertWindToCardnialDirection, convertMsToMph, displayCorrectWeatherIcon} from '../../utilities.js';

function Dashboard({location, backToLandingPage}) {
  const locationAqi = location.current.pollution.aqius;
  const tempInFahrenheit = convertToFahrenheit(location.current.weather.tp);
  const windDirection = convertWindToCardnialDirection(location.current.weather.wd);
  const windMph = convertMsToMph(location.current.weather.ws);
  const weatherIconWithAltText = displayCorrectWeatherIcon(location.current.weather.ic);

//CREATE METHOD THAT HANDLES FAV ICON CLICK (SAVE TO FAV LOCATIONS/LOCAL STORAGE)
//CREATE METHOD THAT HANDLES AQI NUMBER CLICK TO BRING YOU TO INFORMATION PAGE

  const airQualityMessages = (aqi) => {
    if (aqi <= 50) {
      return [
        'GOOD',
        'Air quality is satisfactory, and air pollution poses little or no risk.'
      ];
    }
    else if (aqi > 50 && aqi <= 100) {
      return [
        'MODERATE',
        'Air quality is acceptable. However, there may be a risk for some people, particularly those who are unusually sensitive to air pollution.'
      ];
    }
    else if (aqi > 100 && aqi <= 150) {
      return [
        'UNHEALTHY FOR SENSITIVE GROUPS',
        'Members of sensitive groups may experience health effects. The general public is less likely to be affected.'
      ];
    }
    else if (aqi > 150 && aqi <= 200) {
      return [
        'UNHEALTHY',
        'Some members of the general public may experience health effects; members of sensitive groups may experience more serious health effects.'
      ];
    }
    else if (aqi > 200 && aqi <= 300) {
      return [
        'VERY UNHEALTHY',
        'Health alert: The risk of health effects is increased for everyone.'
      ];
    } else {
      return [
        'HAZARDOUS',
        'Health warning of emergency conditions: everyone is more likely to be affected.'
      ]
    }
  }

  return (
    <section className='main-dashboard'>
      <div className='location-name-temp-container'>
        <div className='location-and-fav-container'>
          <div className='location-container'>
            <img className='location-icon icon' src={locationIcon} alt='Map pin'/>
            <h2 className='location-name'>{`${location.city}, ${location.state}`}</h2>
          </div>
          <Link to='/' className='link-to-landing-page' onClick={backToLandingPage}>Choose a different location</Link>
        </div>
        <div className='temp-container'>
          <img className='weather-icon icon' src={weatherIconWithAltText[0]} alt={weatherIconWithAltText[1]}/>
          <p className='temperature'>{`${tempInFahrenheit} F`}</p>
        </div>
      </div>
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

export default Dashboard;
