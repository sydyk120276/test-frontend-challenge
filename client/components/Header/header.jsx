import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import classNames from 'classnames'

import { history } from '../../redux'
import './header.scss'

const Header = () => {
  const [toggle, setToggle] = useState(false)
  console.log(toggle)

  const onclick = () => {
    setToggle(!toggle)
    history.push('/')
  }
  const onclickToBasket = () => {
    setToggle(!toggle)
    history.push('/basket')
  }
  return (
    <div className="header">
      <div className="block">
        {/* {['Все котики', 'Любимые котики'].map((item, index) => {
          return <button type="button" key={index}>{item}</button>
        })} */}
        <Link to="/" onClick={onclick} className={!toggle ? 'active' : 'block__btn'}>
          Все котики
        </Link>
        <Link to="/basket" onClick={onclickToBasket} className={!toggle ? 'block__btn-long' : 'active'}>
          Любимые котики
        </Link>
      </div>
    </div>
  )
}

export default Header
