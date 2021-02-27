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


function App() {
  const [location, setLocation] = useState({});
  const [dashboardView, setDashboardView] = useState(false);
  const [error, setError] = useState('');

  const grabUserLocationData = () => {
    fetchUserLocation()
      .then(response => {
        setLocation(response.data);
        setDashboardView(true);
      })
      .catch(error => {
        setError(error);
      })
  }

  const grabInputLocationData = (city, state, country) => {
    fetchInputLocation(city, state, country)
      .then(response => {
        setLocation(response.data);
        setDashboardView(true);
      })
      .catch(error => {
        setError(error);
      })
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
              error={error}/>}
        />
        {dashboardView &&
          < Route
            path='/dashboard'
            render={() => {
              return < Dashboard dashboardView={dashboardView} location={location} />}}
          />
        }
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
      <Footer />
    </div>
  );
}

export default App;
