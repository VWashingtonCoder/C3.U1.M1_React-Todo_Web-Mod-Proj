import React from 'react'

export default class Todo extends React.Component {
  render() {
    const { complete, taskInfo } = this.props
    return (
      <div>
        <h3 
          onClick={evt => complete(taskInfo.id)}
          style={{ textDecoration: taskInfo.completed ? "line-through" : "" }}
        > 
          {taskInfo.name}
        </h3>
      </div>
    )
  }
}
