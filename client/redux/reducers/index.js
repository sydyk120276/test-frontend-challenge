import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import basket from './basket'
import cards from './cards'

const createRootReducer = (history) => {
  return combineReducers({
    router: connectRouter(history),
    basket,
    cards
  })
}

export default createRootReducer
