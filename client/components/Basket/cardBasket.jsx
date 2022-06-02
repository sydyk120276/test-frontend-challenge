import React from 'react'
import { useDispatch } from 'react-redux'

import './cardBasket.scss'
import { removeItem } from '../../redux/reducers/basket'

const CardBasket = ({ image }) => {
  const dispatch = useDispatch()
  return (
    <div className="cardBasket">
      <div className="cardBasket__block">
        <div className="button">
          <button type="button" className="img" onClick={() => dispatch(removeItem(image.id))} />
        </div>
        <img className="" src={image.url} alt="" />
      </div>
    </div>
  )
}

export default CardBasket
