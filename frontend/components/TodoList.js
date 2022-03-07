import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    const { tasks, complete } = this.props
    return (
      <div>
        {tasks.map (task => {
          return (
            <Todo
              key={task.id} 
              taskInfo={task} 
              complete={complete}
            />
          )
        })}
      </div>
    )
  }
}
