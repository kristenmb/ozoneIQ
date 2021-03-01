import React from 'react'
import {Link} from 'react-router-dom'

const SavedLocations = ({backToLandingPage}) => {
  return (
    <>
      <h2>Saved Locations</h2>
      <Link to='/' className='link-to-landing-page' onClick={backToLandingPage}>Choose a Location</Link>
    </>
  )
}

export default SavedLocations
