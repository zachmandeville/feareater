import React from 'react'
import { connect } from 'react-redux'

const Form = (props) => {
  return (
    <form id='fear-form'>
    <label for='fear'>Enter your Fear</label>
    <input type='text' name='fear' placeholder={props.fear} />
    <input type='submit' value='give fear' />
  </form>
  )
}


export default Form
