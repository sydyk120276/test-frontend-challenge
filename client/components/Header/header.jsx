import React from 'react'
import { Link } from 'react-router-dom'

import './header.scss'

const Header = () => {
  return (
    <div className="header">
      <div className="block">
        <Link className="block__btn" to="">
          Все котики
        </Link>
        <Link className="block__btn-long" to="">
          Любимые котики
        </Link>
      </div>
    </div>
  )
}

export default Header
