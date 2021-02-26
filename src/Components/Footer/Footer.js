import React from 'react'
import './Footer.css'
import home from '../../assets/homebtn.png'
import locations from '../../assets/locations.png'
import questionmark from '../../assets/questionmark.png'


function Footer() {

  return (
    <footer>
      <img className='footerIcon home-nav-btn' src={home} alt='home button'/>
      <img className='footerIcon saved-local-nav-btn' src={locations} alt='saved locations'/>
      <img className='footerIcon aqi-nav-btn' src={questionmark} alt='more info'/>
      <p className='more-nav-btn'>...</p>
    </footer>
  )
}

export default Footer

