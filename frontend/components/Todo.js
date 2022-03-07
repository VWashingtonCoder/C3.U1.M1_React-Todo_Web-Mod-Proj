import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (
      <div>
        <h2 onClick={null}> {this.props.task.name}</h2>
      </div>
    )
  }
}
