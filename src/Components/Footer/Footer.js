import React from 'react'
import './Footer.css'
import home from '../../assets/homebtn.png'
import locations from '../../assets/locations.png'
import questionmark from '../../assets/questionmark.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <Link to='/'>
        <img className='footerIcon' src={home} alt='home button'/>
      </Link>
      <Link to='/saved-locations'>
        <img className='footerIcon' src={locations} alt='saved locations'/>
      </Link>
      <Link to='/resources'>
        <img className='footerIcon' src={questionmark} alt='more info'/>
      </Link>
      <Link to='/about-us'>
        <p>...</p>
      </Link>
    </footer>
  )
}

export default Footer

