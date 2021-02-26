import React from 'react'
import './Error.css'

const Error = ({errorStatus}) => {
  return(
    <section className='error'>
      {errorStatus}
    </section>
  )
}

export default Error