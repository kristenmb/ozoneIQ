import React, {useState} from 'react'
import './Footer.scss'
import home from '../../assets/homebtn.png'
import locations from '../../assets/locations.png'
import questionmark from '../../assets/questionmark.png'


function Footer() {
  const [ {isClicked1, isClicked2, isClicked3, isClicked4}, toggleIsOpen ] = useState({
      isClicked1: true,
      isClicked2: false,
      isClicked3: false,
      isClicked4: false,
    })

    const toggle = (event) => {
     const { name } = event.target
      toggleIsOpen(prevState => ({ [name]: !prevState[name] }
     ))
   }

  return (
    <footer>
      <button className={`Nav-btn ${isClicked1}`} name='isClicked1' onClick={toggle}>
        <img className='footerIcon' src={home} alt='home button'/>
      </button>
      <button className={`Nav-btn ${isClicked2}`} name='isClicked2' onClick={toggle}>
        <img className='footerIcon' src={locations} alt='saved locations'/>
       </button>
      <button className={`Nav-btn ${isClicked3}`} name='isClicked3' onClick={toggle}>
        <img className='footerIcon' src={questionmark} alt='more info'/>
      </button>
      <button className={`Nav-btn ${isClicked4}`} name='isClicked4' onClick={toggle}>
       <p>...</p>
      </button>
    </footer>
  )
}

export default Footer
