import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import classNames from 'classnames'

// import { history } from '../../redux'
import './header.scss'

const Header = () => {
  const [toggle, setToggle] = useState(true)
  console.log(toggle)

  const onclick = () => {
    setToggle(!toggle)
  }
  // const onclickToBasket = () => {
  //   setToggle(!toggle)
  // }

  return (
    <div className="header">
      <div className="block">
        <Link to="/" onClick={onclick} className={toggle ? 'active' : 'block__btn'}>
          Все котики
        </Link>
        <Link to="/basket" onClick={onclick} className={!toggle ? 'active' : 'block__btn-long'}>
          Любимые котики
        </Link>
      </div>
    </div>
  )
}

export default Header
