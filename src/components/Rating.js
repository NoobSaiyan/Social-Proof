import React from 'react'
import '../css/rating.css'

const Rating = ({ justify, align, name }) => {
  return (
    <div className='card' style={{ justifySelf: justify, alignSelf: align }}>
      <div className='stars'></div>
      <div className='review'>Rated 5 Stars in {name}</div>
    </div>
  )
}

export default Rating
