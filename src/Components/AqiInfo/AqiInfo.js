import React, { useState } from 'react'
import Expand from 'react-expand-animated'
import { aqiInfoText } from '../../aqiData'
import './AqiInfo.scss'

const AqiInfo = () => {
  const [ {isOpen1, isOpen2, isOpen3, isOpen4, isOpen5, isOpen6}, toggleIsOpen ] = useState({
    isOpen1: false,
    isOpen2: false,
    isOpen3: false,
    isOpen4: false,
    isOpen5: false,
    isOpen6: false
  })

  const toggle = (event) => {
    const { name } = event.target

      toggleIsOpen(prevState => ({ ...prevState, [name]: !prevState[name] }
    ))

  }

  const aqiInfoDisplay = aqiInfoText.map(point => {
    return (
      <p className="aqi-info-text">{point}</p>
    )
  })

  return (
    <section className="aqi-section">
      <h2>What's your AQI IQ?</h2>
      <article>
        <button name="isOpen1" onClick={toggle} className="aqi-color-blocks green">
          0 - 50 <br/> GOOD
          <Expand
            open={isOpen1}
            duration={600}
          >
            <p>Air quality is satisfactory, and air pollution poses little or no risk.</p>
          </Expand>
        </button>
        <button name="isOpen2" onClick={toggle} className="aqi-color-blocks yellow">
          51 - 100 <br/> MODERATE
            <Expand
            open={isOpen2}
            duration={600}
          >
            <p>Air quality is acceptable. However, there may be a risk for some people, particularly those who are unusually sensitive to air pollution.</p>
          </Expand>
        </button>
        <button name="isOpen3" onClick={toggle} className="aqi-color-blocks orange">
          101 - 150<br/> UNHEALTHY FOR SENSITIVE GROUPS
            <Expand
            open={isOpen3}
            duration={600}
          >
            <p>Members of sensitive groups may experience health effects. The general public is less likely to be affected.</p>
          </Expand>
        </button>
        <button name="isOpen4" onClick={toggle} className="aqi-color-blocks red">
          151 - 200<br/>UNHEALTHY
            <Expand
            open={isOpen4}
            duration={600}
          >
            <p>Some members of the general public may experience health effects; members of sensitive groups may experience more serious health effects.</p>
          </Expand>
        </button>
        <button  name="isOpen5" onClick={toggle}  className="aqi-color-blocks maroon">
          201 - 300 <br/> VERY UNHEALTHY
          <Expand
            open={isOpen5}
            duration={600}
          >
            <p>Health alert: The risk of health effects is increased for everyone.</p>
          </Expand>
        </button>
        <button  name="isOpen6" onClick={toggle} className="aqi-color-blocks purple">
          301+<br/>HAZARDOUS
          <Expand
          id={6}
          open={isOpen6}
          duration={600}
          >
              <p>Health warning of emergency conditions: everyone is more likely to be affected.</p>
          </Expand>
        </button>
      </article>
      <article className='info'>
        {aqiInfoDisplay}
      </article>
    </section>
  )
}

export default AqiInfo
