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
    const { values, clear } = this.props  
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            value={values.nameInput}
            onChange={this.onChange}
            type="text"
            id="nameInput"
            placeholder="Add Todo"
          />
          <input type="submit"/>
        </form>
        <button onClick={() => clear()}>Clear Completed</button>
      </div>
    )
  }
}
