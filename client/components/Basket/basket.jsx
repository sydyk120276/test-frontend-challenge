import React from 'react'
import { useSelector } from 'react-redux'

import Header from '../Header/header'
import Card from '../Card/card'
import './basket.scss'

const Basket = () => {
  const { catsBasket } = useSelector((s) => s.basket)

  return (
    <div className="basket">
      <Header />
      <div className="basket__block">
        {Object.values(catsBasket).map((elem) => {
          return (
            <div key={elem.id}>
              <Card image={elem.image} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Basket
