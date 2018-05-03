//outdoor tools
import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

//indoor tools
import App from './components/App'
import reducer from './reducers'
import store from './reducers'


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


