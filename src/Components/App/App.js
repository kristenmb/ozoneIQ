import React from 'react';
import Dashboard from '../Dashboard/Dashboard.js';
import './App.css';
import LandingPage from '../LandingPage/LandingPage'
import Footer from '../Footer/Footer'

function App() {
  return (
    <div className="App">
      <LandingPage />
      <Footer />
      < Dashboard />
    </div>
  );
}

export default App;
