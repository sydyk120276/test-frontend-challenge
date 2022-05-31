import React, { useState, useEffect } from 'react'

import Card from '../Card/card'
import './cards.scss'

const Cards = () => {
  const [state, setState] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [tetching, setFetching] = useState(true)

  const text = document.getElementsByClassName('cards__text')
  console.log('text', text)

  const scrollText = () => {
    text.addEventListener('scroll', text.classList('active'))
  }

  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100
    ) {
      setFetching(true)
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
      <div onScroll={() => scrollText()} className="cards__text">
        ... загружаем еще котиков ...
      </div>
    </div>
  )
}

export default Cards
