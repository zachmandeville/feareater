//outdoor tools
import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

//indoor tools
import App from './components/App'
import reducer from './reducers'


//initialize a store, using our fear reducer
var store = createStore(reducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

//render our App component once the entire DOM loads, and place that sweet 
//man within whatever has the id of 'root
document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
  )
})


