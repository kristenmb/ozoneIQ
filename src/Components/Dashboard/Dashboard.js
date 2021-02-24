import React from 'react';
import './Dashboard.css';

function Dashboard(props) {

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
    <main>
      <section className={`main-dashboard ${airQualityMessages(20)[0]}`}>
        <div className='location-name-temp-container'>
          <div className='location-and-fav-container'>
            <div className='location-container'>
              <img className='location-icon' src='' alt='Map pin'/>
              <h2 className='location-name'>Denver, Colorado</h2>
            </div>
            <img className='fav-icon' src='' alt='Empty Star'/>
          </div>
          <div className='temp-container'>
            <img className='weather-icon' src='' alt='Weather'/>
            <p className='temperature'>32 F</p>
          </div>
        </div>
        <div className='aqi-container'>
          <h1 className='aqi-level'>{airQualityMessages(20)[0]}</h1>
          <div className='aqi-number'>20</div>
          <p className='aqi-description'>{airQualityMessages(20)[1]}</p>
        </div>
        <div className='additional-info-container'>
          <div className='additional-info'>
            <img className='pollutant-icon' src='' alt='Outline of smoke stack'/>
            <p className='pollutant'>o3</p>
          </div>
          <div className='additional-info'>
            <img className='humidity-icon' src='' alt='Outline of rain drop'/>
            <p className='humidity'>20%</p>
          </div>
          <div className='additional-info'>
            <img className='pressure-icon' src='' alt='Outline of a pressure guage'/>
            <p className='pressure'>30 hPa</p>
          </div>
          <div className='additional-info'>
            <img className='wind-icon' src='' alt='Outline of wind blowing'/>
            <p className='pressure'>10 mph NE</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Dashboard;
