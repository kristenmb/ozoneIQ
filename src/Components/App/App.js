import React, {useState} from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Dashboard from '../Dashboard/Dashboard.js';
import LandingPage from '../LandingPage/LandingPage'
import AqiInfo from '../AqiInfo/AqiInfo'
import Contact from '../Contact/Contact'
import Error from '../Error/Error'
import Resources from '../Resources/Resources'
import SavedLocations from '../SavedLocations/SavedLocations'
import Footer from '../Footer/Footer'
import {fetchUserLocation, fetchInputLocation} from '../../utilities'


function App() {
  const [location, setLocation] = useState({});
  const [dashboardView, setDashboardView] = useState(false);
  const [errorStatus, setErrorStatus] = useState('')

  const grabUserLocationData = () => {
    fetchUserLocation()
      .then(response => {
        setLocation(response.data);
        setDashboardView(true);
    })
      .catch(error => {
        console.log('Location Request Failed', error)
        setErrorStatus('Sorry, We are having issues loading this page..Please try again later!')
      })
  }
   
  const grabInputLocationData = (city, state, country,) => {
    fetchInputLocation(city, state, country)
      .then(response => {
        setLocation(response.data);
        setDashboardView(true);
      })
      .catch(error => {
        console.log('Location Request Failed', error)
        setErrorStatus('Sorry, We are having issues loading this page..Please try again later!')
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
        < Route
          exact
          path='/resources'
          component={AqiInfo}
        />
        < Route
          exact
          path='/saved-locations'
          component={SavedLocations}
        />
        < Route
          exact
          path='/about-us'
          component={Contact}
        />
      </Switch>
      {errorStatus && <Error errorStatus={errorStatus}/>}
      <Footer />
    </div>
  );
}


export default App;
