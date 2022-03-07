import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (
      <div>
        <p onClick={null}> {this.props.task.name}</p>
      </div>
    )
  }
}
