import React from 'react';

function Dashboard(props) {
  const displayAirQualityMessage = (aqi) => {
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
    else if (aqi > 200 && <= 300) {
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
          <h2 className='city-name'>props.city</h2>
          <img className='fav-icon' src='' alt='Empty Star'/>
          <div className='temp-container'>
            <img className='weather-icon' src='' alt='Weather'/>
            <p className='temperature'>props.forecasts.tp</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Dashboard;
