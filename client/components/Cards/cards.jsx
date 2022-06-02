import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Card from '../Card/card'
import './cards.scss'
import { getLists } from '../../redux/reducers/cards'

const Cards = () => {
  const dispatch = useDispatch()
  const [state, setState] = useState([])
  const [visibled, setVisibled] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [tetching, setFetching] = useState(true)

  console.log('text', state)

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
    dispatch(getLists())
  }, [])

  useEffect(() => {
    if (tetching) {
      fetch(`https://api.thecatapi.com/v1/breeds?limit=17&page=${currentPage}&order=desc`)
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

  // карточки без поля и пустого поля image
  const cats = state.filter((item) => item.image && item.image.id)

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
