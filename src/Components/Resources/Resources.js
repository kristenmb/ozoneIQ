import React from 'react'
import { staySafeText, howToHelpText } from '../../aqiData'
import './Resources.css'

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
      <ul>
        {safetyHowTos}
      </ul>
      </article>
      <h2>How can I limit my carbon footprint?</h2>
      <ul>
        {helpHowTos}
      </ul>
    </section>
  )
}

export default Resources