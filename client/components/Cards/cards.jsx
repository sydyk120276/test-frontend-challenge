import React, { useState, useEffect } from 'react'

import Card from '../Card/card'
import './cards.scss'

const Cards = () => {
  const [state, setState] = useState([])
  const [visibled, setVisibled] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [tetching, setFetching] = useState(true)

  const text = document.getElementsByClassName('cards__text')
  console.log('text', text)

  const scrollHandler = (e) => {
    if (
      // eslint-disable-next-line
      e.target.documentElement.scrollHeight -
        // eslint-disable-next-line
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFetching(true)
      setVisibled(false)
    }
  }

  useEffect(() => {
    if (tetching) {
      fetch(`https://api.thecatapi.com/v1/breeds?limit=15&page=${currentPage}&order=desc`)
        .then((res) => res.json())
        .then((data) => {
          setState([...state, ...data])
          setCurrentPage((prevState) => prevState + 1)
        })
        .finally(() => setFetching(false))
    }
  }, [tetching])

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    return function () {
      document.removeEventListener('scroll', scrollHandler)
    }
  }, [])
  console.log(state.length)

  // 15 карточка без картинки
  const cats = state.filter((item) => item.image)

  console.log(cats.length)

  return (
    <div className="cards">
      <div className="cards__block">
        {cats.map((el) => {
          return (
            <div key={el.id}>
              <Card image={el.image} />
            </div>
          )
        })}
      </div>
      {visibled && <div className="cards__text">... загружаем еще котиков ...</div>}
    </div>
  )
}

export default Cards
