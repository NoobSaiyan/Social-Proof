import React from 'react'
import '../css/rating.css'

const Rating = ({ justify, align, name }) => {
  let names = ['icon-star', 'icon-star', 'icon-star', 'icon-star', 'icon-star']
  const stars = names.map((name, index) => (
    <div key={index} style={{ display: 'inline' }}>
      {' '}
      <img key={index} src={`/images/${name}.svg`} alt='' />
    </div>
  ))
  return (
    <div className='card' style={{ justifySelf: justify, alignSelf: align }}>
      <div className='stars'>{stars} </div>
      <div className='review'>Rated 5 Stars in {name}</div>
    </div>
  )
}

export default Rating
