import React from 'react'
import { connect as buildWifiContainer } from 'react-redux'

import Form from './Form'
import { addFear } from '../actions/'

//When App is called, run a function, with the argument props, that renders some html.
//The html will be able to use anything in state as one of it's 'props' because we
//mapped all of state to properties using a function below.
const App = ({fear, addFear}) => { //{} is passing an object into the component, which gets immediately destructured and assigned to variables, which can be called below (instead of props, and then props.addfear)
  return (
    <div id='root'>
      <h1>Hi how are you. I am feareater</h1>
      <Form fear={fear} addFear={addFear}/>
      <h2>{fear}</h2>
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
    //dispatch({type:'ADD_FEAR', fear: fear})
    }
  }
}

//connect App to state through redux react magic.  
const wifiContainer = buildWifiContainer(mapStateToProps,mapDispatchToProps)
const wifiComponent = wifiContainer(App)

export default wifiComponent
