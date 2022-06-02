import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import { Provider } from 'react-redux'

import store from '../redux'
import Startup from './startup'
import Main from '../components/Main/main'
import Basket from '../components/Basket/basket'

const Root = () => {
  return (
    <Provider store={store}>
      <Startup>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/basket" element={<Basket />} />
          </Routes>
        </BrowserRouter>
      </Startup>
    </Provider>
  )
}

export default Root
