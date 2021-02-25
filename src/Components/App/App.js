import React, {useState} from 'react';
import Dashboard from '../Dashboard/Dashboard.js';
import './App.css';
import LandingPage from '../LandingPage/LandingPage'
import Footer from '../Footer/Footer'
import {fetchUserLocation} from '../../utilities'


function App() {
  const [currentLocation, setCurrentLocation] = useState({});
  const [dashboardView, setDashboardView] = useState(false)

  const grabLocationData = (event) => {
    event.preventDefault();
    fetchUserLocation()
      .then(response => {
        setCurrentLocation(response.data);
        setDashboardView(true);
        console.log(currentLocation);
      })
  }

  return (
    <div className="App">
      {!dashboardView && < LandingPage grabLocationData={grabLocationData}/>}
      {dashboardView && < Dashboard location={currentLocation} />}
    </div>
  );
}

export default App;
