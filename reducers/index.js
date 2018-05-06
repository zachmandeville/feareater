var initialState = {
  fear: ''
}

var reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FEAR':
      return {fear: action.fear}
    default:
      return state
  }
}

export default reducer
