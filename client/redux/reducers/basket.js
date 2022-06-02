const ADD_ID = '@basket/ADD_ID'
const DELETE_ITEM = '@basket/DELETE_ITEM'

const initialState = {
  catsBasket: {},
  ...JSON.parse(localStorage.getItem('basket'))
}

export default (state = initialState, action = '') => {
  switch (action.type) {
    case ADD_ID: {
      return {
        ...state,
        catsBasket: action.payload
      }
    }
    case DELETE_ITEM: {
      return {
        ...state,
        catsBasket: action.payload
      }
    }
    default:
      return state
  }
}

export function addAmount(id) {
  return (dispatch, getState) => {
    const store = getState()
    const { list } = store.cards
    const { catsBasket } = store.basket
    console.log('catsBasket', catsBasket)
    const basket = list.find((item) => item.image.id === id)
    dispatch({
      type: ADD_ID,
      payload: { ...catsBasket, [id]: basket }
    })
  }
}

export const removeItem = (id) => {
  return (dispatch, getState) => {
    const { catsBasket } = getState().basket
    delete catsBasket[id]
    dispatch({
      type: DELETE_ITEM,
      payload: { ...catsBasket }
    })
  }
}
