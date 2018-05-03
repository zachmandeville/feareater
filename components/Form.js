import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

var Form = (props) => {
  return (
    <form id='fear-form' onSubmit={props.handleSubmit}>
    <label>Enter your Fear</label>
    <Field name='fear' component='input' type='text' placeholder={props.fear} />
    <button type='submit'>Give your Fear</button>
  </form>
  )
}

Form = reduxForm({
  form: 'fear'
})(Form)


export default connect()(Form)
