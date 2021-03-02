import React, {useState} from 'react'
import './Footer.scss'
import home from '../../assets/homebtn.png'
import locations from '../../assets/locations.png'
import questionmark from '../../assets/questionmark.png'
import { Link } from 'react-router-dom'

function Footer() {
  const [dashboardBtn, toggleDash] = useState(true);
  const [savedBtn, toggleSaved] = useState(false);
  const [resourcesBtn, toggleResources] = useState(false);
  const [aboutBtn, toggleAbout] = useState(false);

  const toggleBtns = (activeBtn, notActive1, notActive2, notActive3) => {
    activeBtn(true);
    notActive1(false);
    notActive2(false);
    notActive3(false);
   }

  return (
    <footer>
      <Link to='/dashboard'
      className={`Nav-btn ${dashboardBtn}`}
      name='isClicked1'
      onClick={event => toggleBtns(toggleDash, toggleSaved, toggleResources, toggleAbout)}
      role='button'
      >
      <img className='footerIcon home-nav-btn' src={home} alt='home button'/>
      </Link>
      <Link to='/saved-locations'
      className={`Nav-btn ${savedBtn}`}
      name='isClicked2'
      onClick={event => toggleBtns(toggleSaved, toggleResources, toggleAbout, toggleDash)}
      role='button'
      >
        <img className='footerIcon saved-local-nav-btn' src={locations} alt='saved locations'/>
      </Link>
      <Link to='/resources'
      className={`Nav-btn ${resourcesBtn}`}
      name='isClicked3'
      onClick={event => toggleBtns(toggleResources, toggleAbout, toggleDash, toggleSaved)}
      role='button'
      >
        <img className='footerIcon aqi-nav-btn' src={questionmark} alt='more info'/>
      </Link>
      <Link to='/about-us'
      className={`Nav-btn ${aboutBtn}`}
      name='isClicked4'
      onClick={event => toggleBtns(toggleAbout, toggleDash, toggleSaved, toggleResources)}
      role='button'
      >
        <p className='more-nav-btn'>...</p>
      </Link>
    </footer>
  )
}

export default Footer
