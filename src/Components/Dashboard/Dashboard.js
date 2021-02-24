import React from 'react';

function Dashboard(props) {
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
        'Unhealthy for Sensitive Groups',
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
    <>
      <section className='main-dashboard'>
        <div className='selected-city-name-temp-container'>
          <img className='location-icon' src='' alt='Map pin'/>
          <h2 className='city-name'>Denver, Colorado</h2>
          <img className='fav-icon' src='' alt='Empty Star'/>
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
    </>
  )
}

export default Dashboard;
