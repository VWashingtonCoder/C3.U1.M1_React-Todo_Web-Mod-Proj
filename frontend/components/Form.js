import React from 'react'

export default class Form extends React.Component {
  render() {
    const { values } = this.props
    console.log(values);
    return (
     <form onSubmit={null}>
       <input
        value={values.nameInput}
        onChange={null}
        type="text"
        id={values.id}
        placeholder="Add Todo"
       />
    </form>
    )
  }
}
