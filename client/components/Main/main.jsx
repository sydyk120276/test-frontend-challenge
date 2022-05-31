import React from 'react'

import Head from '../head'
import Cards from '../Cards/cards'
import Header from '../Header/header'
import './main.scss'

const Main = () => {
  return (
    <div className="main">
      <Head title="Main" />
      <Header />
      <Cards />
    </div>
  )
}

export default Main
