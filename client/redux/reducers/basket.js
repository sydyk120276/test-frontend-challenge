const ADD_ID = '@basket/ADD_ID'

const initialState = {
  catsBasket: {}
}

export default (state = initialState, action = '') => {
  switch (action.type) {
    case ADD_ID: {
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
    console.log('basket......', basket)
    dispatch({
      type: ADD_ID,
      payload: { ...catsBasket, [id]: basket }
    })
  }
}
// export function addAmount(id) {
//   return (dispatch) => {
//     dispatch({
//       type: ADD_ID,
//       payload: id
//     })
//   }
// }
