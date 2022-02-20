import React from 'react'

function ServiceCard(props) {
  return (
    <div className='service-card-container'>
        <div className='service-card-text'>
            <p className='service-card-text-inner'>{props.content}</p>
        </div>
    </div>
  )
}

export default ServiceCard