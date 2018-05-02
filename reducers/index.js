var initialState = {
  fear: ''
}

var fearEater = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FEAR':
      return {fear: action.fear}
    default:
      return state
  }
}

export default fearEater
