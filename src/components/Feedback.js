import React from 'react'
import '../css/feedback.css'
import ReactRoundedImage from 'react-rounded-image'

const Feedback = ({ justify, align, avtar, name, review }) => {
  return (
    <div
      className='feedCard'
      style={{ justifySelf: justify, alignSelf: align }}
    >
      <div className='pic'>
        <ReactRoundedImage
          image={`/images/${avtar}`}
          roundedSize='0'
          imageWidth='55'
          imageHeight='55'
        />
      </div>
      <div className='head'>
        <p className='name'>{name}</p>
        <p className='verify'>Verified Buyer</p>
      </div>
      <div className='main'>
        <p>"{review}"</p>
      </div>
    </div>
  )
}

export default Feedback
