import React from 'react'
// import { Component } from 'react'

//create a new class called Form which is an extension of the React class Component.  In the way a
//cat is an extension of the platonic class of Animal.
class Form extends React.Component {
// class Form extends Component {

//when you create the platonic form, construct it in this way...
  constructor (props) {
    super(props) //start by building up the original component we extending from.  pass along the genes of it, to this new thing.
    this.state = {
      theFear: 'dog'
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  console.log(this.state)
  }
  
  handleChange (e) {
    this.setState({
      theFear : e.target.value,
      received: false
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.addFear(this.state.theFear)
  }

  render(){
    return (
    <form id='fear-form' onSubmit={this.handleSubmit}>
      <label>Enter your Fear</label>
      <input type='text' name='fear'  name='theFear' onChange={this.handleChange} placeholder='hi' />
      <button type='submit'>Give your Fear</button>
    </form>
    )
  }
}

export default Form
