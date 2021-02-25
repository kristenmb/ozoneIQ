import React from 'react'
import './Footer.css'
import home from '../../assets/homebtn.png'
import locations from '../../assets/locations.png'
import questionmark from '../../assets/questionmark.png'


function Footer() {

  return (
    <footer>
      <img className='footerIcon' src={home} alt='home button'/>
      <img className='footerIcon' src={locations} alt='saved locations'/>
      <img className='footerIcon' src={questionmark} alt='more info'/>
      <p className='footerIcon'>...</p>
    </footer>
  )
}

export default Footer

