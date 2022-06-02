import React from 'react'
import { useDispatch } from 'react-redux'

import './card.scss'
import { addAmount } from '../../redux/reducers/basket'

const Card = ({ image }) => {
  const dispatch = useDispatch()
  return (
    <div className="card">
      <div className="card__block">
        <div className="button">
          <button type="button" className="img" onClick={() => dispatch(addAmount(image.id))} />
        </div>
        <img className="" src={image.url} alt="" />
      </div>
    </div>
  )
}

export default Card
