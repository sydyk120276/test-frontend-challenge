import React from 'react'

import './card.scss'

const Card = ({ image }) => {
  return (
    <div className="card">
      <img className="card__img" src={image.url} alt="" />
    </div>
  )
}

export default Card
