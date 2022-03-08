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
    id: null, 
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
  /*allow compeleted to be filtered out*/
  completeTask = id => {
    this.setState({
      ...this.state, tasks: this.state.tasks.map(task => {
        return task.id === id 
        ? {...task, completed: true} : task
      })
    })
  }
  addTask = () => {
    const {tasks, 
      form: { nameInput, completed } } = this.state;
    const newTask = { 
      id: getIdx(), 
      name: nameInput,
      completed: completed,
    };
    this.setState({
      ...this.state,
      form: initialState.form,
      tasks: [ ...tasks, newTask]
    });
  }
  changeInput = (key, value) => {
    this.setState({
      ...this.state,
      form: { ...this.state.form, [key]: value },
    })
  }
  deleteCompleted = () => {
    const { tasks } = this.state
    this.setState({
      ...this.state, 
        tasks: tasks.filter(task => task.completed !== true), 
    })
  }

  render() {
    const { tasks, form } = this.state

    return (
      <div>
        <TodoList 
          tasks={tasks} 
          complete={this.completeTask} 
        />
        <Form 
          values={form} 
          onSubmit={this.addTask}
          onChange={this.changeInput}
          clear={this.deleteCompleted}  
        />
      </div>
    )
  }
}
