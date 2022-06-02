const GET_ALL_CARDS = '@cards/GET_ALL_CARDS'

const initialState = {
  list: [],
}

export default (state = initialState, action = '') => {
  switch (action.type) {
    case GET_ALL_CARDS: {
      return {
        ...state,
        list: action.payload,
      }
    }
    default:
      return state
  }
}

export function getLists() {
  return (dispatch) => {
    fetch('https://api.thecatapi.com/v1/breeds')
      .then((res) => res.json())
      .then((data) => {
        const allCards = data.filter((item) => item.image && item.image.id)
        dispatch({ type: GET_ALL_CARDS, payload: allCards })
      })
      .catch((e) => console.log(e))
  }
}
