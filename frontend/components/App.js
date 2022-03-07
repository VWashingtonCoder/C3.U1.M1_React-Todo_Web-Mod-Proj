/*Imports*/
import React from 'react'
import TodoList from './TodoList'
import Form from './Form'
/*Data*/
let idx = 0;
const getIdx = () => ++idx;
const tasks = [
  {id: getIdx(), name: 'Crush Module Project', completed: false},
  {id: getIdx(), name: 'Eat Some Dinner', completed: false},
  {id: getIdx(), name: 'Watch some anime', completed: false},
]
const form = {
    id: getIdx(), 
    nameInput: '', 
    completed: false
}
const initialState = {
  tasks,
  form,
}

export default class App extends React.Component {
  state = initialState;
  /*Helper Functions*/
  // completeTask = idx => {
  //   const newTasks = [ ...tasks ];
  //   newTasks[idx].completed = true;
  //   this.setState
  // }
  // addTask = task => {
  //   const newTasks = [ ...tasks, {task, completed: false} ];
  // }

  render() {
    const { tasks, form } = this.state

    return (
      <div>
        <TodoList tasks={tasks}/>
        <Form values={form}/>
      </div>
    )
  }
}
