import React, {useState} from 'react';
import { Route, Switch, match } from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard.js';
import './App.css';
import LandingPage from '../LandingPage/LandingPage'
import Footer from '../Footer/Footer'
import {fetchUserLocation, fetchInputLocation} from '../../utilities'


function App() {
  const [location, setLocation] = useState({});
  const [dashboardView, setDashboardView] = useState(false);

  const grabUserLocationData = () => {
    fetchUserLocation()
      .then(response => {
        setLocation(response.data);
        setDashboardView(true);
      })
 
  }

   
  const grabInputLocationData = (city, state, country, event) => {
    fetchInputLocation(city, state, country)
      .then(response => {
        setLocation(response.data);
        setDashboardView(true);
      })
  }

  return (
    <div className="App">
      <Switch>
        < Route 
          exact
          path='/'
          render={() => 
            <LandingPage 
              grabUserLocationData={grabUserLocationData}
              grabInputLocationData={grabInputLocationData}/>}
        />
        < Route 
          path='/dashboard'
          render={() => {
           return dashboardView && 
            (< Dashboard dashboardView={dashboardView} location={location} />)}}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
