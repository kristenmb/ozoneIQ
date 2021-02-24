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
        <div className='selected-city-name-temp'>
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
      </section>
    </>
  )
}

export default Dashboard;
