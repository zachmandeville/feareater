import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

var Form = (props) => {
  return (
    <form id='fear-form' onSubmit={props.handleSubmit}>
    <label>Enter your Fear</label>
    <input type='text' name='fear' placeholder={props.fear} />
    <input type='submit' value='give fear' />
  </form>
  )

  function submit (e) {
    e.preventDefault()
    console.log({target: e.currentTarget})
  }
}


export default connect()(Form)
