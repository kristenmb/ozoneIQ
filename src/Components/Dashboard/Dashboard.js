import React from 'react';

function Dashboard(props) {

  return (
    <>
      <section className='main-dashboard'>
        <div className='selected-city-name-temp'>
          <img src='' alt='Map pin'/>
          <h2 className='city-name'>props.city</h2>
          <img className='fav-icon' src='' alt='Empty Star'/>
          <div className='temp-container'>
            <p className='temperature'>props.forecasts.tp</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Dashboard;
