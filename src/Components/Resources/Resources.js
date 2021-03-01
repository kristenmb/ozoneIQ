import React from 'react'
import { Link } from 'react-router-dom'
import { staySafeText, howToHelpText } from '../../aqiData'
import leftArrow from '../../assets/left-arrow.png'
import './Resources.scss'

const Resources = () => {
  const safetyHowTos = staySafeText.map(tip => {
    return (
      <li>{tip}</li>
    )
  })

  const helpHowTos = howToHelpText.map(point => {
    return (
      <li>{point}</li>
    )
  })

  return (
    <section className="resources-section">
      <article>
      <h2>How can I stay safe?</h2>
      <ul className="text-area">
        {safetyHowTos}
      </ul>
      </article>
      <h2>How can I limit my carbon footprint?</h2>
      <ul className="text-area">
        {helpHowTos}
      </ul>
      <Link to='/resources'>
        <button className='back-btn'>
          <img src={leftArrow} alt='Thin arrow pointing left'/>
          Back</button>
      </Link>
    </section>
  )
}

export default Resources