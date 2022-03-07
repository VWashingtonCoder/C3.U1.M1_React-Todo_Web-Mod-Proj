import React from 'react'

export default class Todo extends React.Component {
  render() {
    const { complete, taskInfo } = this.props
    console.log(taskInfo)
    return (
      <div>
        <h2 
          onClick={evt => complete(taskInfo.id)}
          style={{ textDecoration: taskInfo.completed ? "line-through" : "" }}
        > 
          {taskInfo.name}
        </h2>
      </div>
    )
  }
}
