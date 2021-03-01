import React, {useState} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
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
import SavedLocalCards from '../SavedLocalCards/SavedLocalCards';


function App() {
  const [location, setLocation] = useState({});
  const [dashboardView, setDashboardView] = useState(false);
  const [error, setError] = useState('');

  const grabUserLocationData = () => {
    fetchUserLocation()
      .then(response => {
        setLocation(response.data);
        setDashboardView(true);
        setError('');
      })
      .catch(error => {
  
        setError(error.message);
      })
  }

  const grabInputLocationData = (city, state, country) => {
    fetchInputLocation(city, state, country)
      .then(response => {
        setDashboardView(false)
        setLocation(response.data);
        setDashboardView(true);
        setError('');
      })
      .catch(error => {
        setError(error.message);
      })
  }

  const backToLandingPage = () => {
    setDashboardView(false);
  }

  const clearErrorOnLandingPage = (event) => {
    setError('');
  }

  return (
    <div className="App">
      {error && < Redirect to='/' />}
      <Switch>
        < Route
          exact
          path='/'
          render={() =>
            <LandingPage
              grabUserLocationData={grabUserLocationData}
              grabInputLocationData={grabInputLocationData}
              backToLandingPage={backToLandingPage}
              clearErrorOnLandingPage={clearErrorOnLandingPage}
              error={error}/>}
        />
        {dashboardView &&
          < Route
            path='/dashboard'
            render={() => {
              return < Dashboard dashboardView={dashboardView} location={location} backToLandingPage={backToLandingPage}/>}}
          />
        }
        < Route
          exact
          path='/resources'
          render={() => {
            return < AqiInfo backToLandingPage={backToLandingPage} />}}
        />
        < Route
          exact
          path='/resources2'
          component={Resources}
        />
        < Route
          exact
          path='/saved-locations'
          render={() => {
            return < SavedLocations grabInputLocationData={grabInputLocationData}  backToLandingPage={backToLandingPage} />}}
        />
        < Route
          exact
          path='/about-us'
          render={() => {
            return < Contact backToLandingPage={backToLandingPage} />}}
        />
      </Switch>
      {dashboardView && < Footer />}
    </div>
  );
}

export default App;
