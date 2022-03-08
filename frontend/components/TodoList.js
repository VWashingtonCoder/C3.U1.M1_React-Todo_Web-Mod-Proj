import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    const { tasks, complete } = this.props
    return (
      <div>
        <h2>Todos:</h2>
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
