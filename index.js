//outdoor tools
import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducers'

//indoor tools
import App from './components/App'


//initialize a store, using our fear reducer
var store = createStore(reducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

document.addEventListener('DOMContentLoaded', () => {
  render(<App />,document.getElementById('root'))
  store.subscribe(render)
})


