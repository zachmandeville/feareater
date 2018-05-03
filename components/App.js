import React from 'react'
import { connect } from 'react-redux'

import Form from './Form'
import {addFear} from '../actions/'

//When App is called, run a function, with the argument props, that renders some html.
//The html will be able to use anything in state as one of it's 'props' because we
//mapped all of state to properties using a function below.
const App = (props) => {
  return (
    <div id='root'>
      <h1>Hi how are you. I am feareater</h1>
      <h2>Enter your fear:</h2>
      <Form fear={props.fear} addFear={props.addFear}/>
    </div>
  )
}

//Map the state to properties, or rather map the state properties I ask for within this object to the
//property I state.  
const mapStateToProps = (state) => {
  return {
    fear: state.fear
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFear: (fear) => {
      dispatch(addFear(fear))
    }
  }
}

//connect App to State through redux react magic.  
export default connect(mapStateToProps,mapDispatchToProps)(App)
