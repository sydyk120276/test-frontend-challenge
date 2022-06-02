import React from 'react'
import { useSelector } from 'react-redux'

import Header from '../Header/header'
import CardBasket from './cardBasket'
import './basket.scss'

const Basket = () => {
  const { catsBasket } = useSelector((s) => s.basket)

  return (
    <div className="basket">
      <Header />
      <div className="basket__block">
        {Object.values(catsBasket).map((elem) => {
          return (
            <div className="basket__block-card" key={elem.id}>
              <CardBasket image={elem.image} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Basket
