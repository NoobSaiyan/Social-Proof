import React from 'react'
import Feedback from './Feedback'
import '../css/lower.css'

const Lower = () => {
  const clients = [
    {
      name: 'Colton Smith',
      review:
        'We need the same printed design as the one we had ordered a week prior. Not onyl did they find the original order, but we also received it in time. Excellent!',
      avatar: 'colton.jpg',
    },
    {
      name: 'Irene Roberts',
      review:
        'Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.',
      avatar: 'irene.jpg',
    },
    {
      name: 'Anne Wallace',
      review:
        'Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommended them to everyone!.',
      avatar: 'anne.jpg',
    },
  ]
  return (
    <div className='lower'>
      <Feedback
        justify='start'
        align='start'
        name={clients[0].name}
        avtar={clients[0].avatar}
        review={clients[0].review}
      />
      <Feedback
        justify='center'
        align='center'
        name={clients[1].name}
        avtar={clients[1].avatar}
        review={clients[1].review}
      />
      <Feedback
        justify='end'
        align='end'
        name={clients[2].name}
        avtar={clients[2].avatar}
        review={clients[2].review}
      />
    </div>
  )
}

export default Lower
