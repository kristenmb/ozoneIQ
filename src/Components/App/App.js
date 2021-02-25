import React, {useState} from 'react';
import Dashboard from '../Dashboard/Dashboard.js';
import './App.css';
import LandingPage from '../LandingPage/LandingPage'
import Footer from '../Footer/Footer'
import {fetchUserLocation, fetchInputLocation} from '../../utilities'


function App() {
  const [currentLocation, setCurrentLocation] = useState({});
  const [inputLocation, setInputLocation] = useState({});
  const [dashboardView, setDashboardView] = useState(false);

  const grabUserLocationData = (event) => {
    event.preventDefault();
    fetchUserLocation()
      .then(response => {
        setCurrentLocation(response.data);
        setDashboardView(true);
      })
  }

  const grabInputLocationData = (city, state, country, event) => {
    event.preventDefault();
    fetchInputLocation(city, state, country)
      .then(response => {
        setInputLocation(response.data);
        setDashboardView(true);
      })
  }

  return (
    <div className="App">
      {!dashboardView && < LandingPage grabUserLocationData={grabUserLocationData} grabInputLocationData={grabInputLocationData}/>}
      {dashboardView && < Dashboard location={currentLocation} />}
    </div>
  );
}

export default App;
