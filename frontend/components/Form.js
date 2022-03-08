import React from 'react'

export default class Form extends React.Component {
  onSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit();
  }
  onChange = evt => {
    const { value, id } = evt.target
    this.props.onChange(id, value)
  }
  render() {
    const { values, tasks, hide } = this.props
    return (
     <form onSubmit={this.onSubmit}>
       <input
        value={values.nameInput}
        onChange={this.onChange}
        type="text"
        id="nameInput"
        placeholder="Add Todo"
       />
       <input type="submit"/>
        <button onClick={() => hide()}>Hide Tasks</button>
    </form>
    )
  }
}
