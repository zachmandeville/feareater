import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import { fearEater } from './fearEater'

var reducer = combineReducers({
  fearEater: fearEater,
  form: formReducer // mounted under "form"
})

var store = createStore(reducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
