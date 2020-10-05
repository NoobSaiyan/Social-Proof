import React from 'react'
import Rating from './Rating'
import '../css/upper.css'

const Upper = () => {
  return (
    <div className='upper'>
      <div className='heading'>
        <h1>10,000+ of our users love our products.</h1>
        <p className='info'>
          We only provide great products combined with excellent customer
          service.See what our satisfied customers are saying about our
          services.
        </p>
      </div>
      <div className='rating'>
        <Rating justify='start' align='start' name='Reviews' />
        <Rating justify='center' align='center' name='Report Guru' />
        <Rating justify='end' align='end' name='BestTech' />
      </div>
    </div>
  )
}

export default Upper
