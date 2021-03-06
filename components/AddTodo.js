import React, { Component, PropTypes } from 'react'

export default class AddTodo extends Component {
   render() {
     console.log('Addtodo called');
      return (
         <div>
            <input type = 'text' ref = 'input' />

            <button onClick = {(e) => this.handleClick(e)}>
               Add
            </button>

         </div>
      )
   }

   handleClick(e) {
     console.log('handle click called');
      const node = this.refs.input
      const text = node.value.trim()
      this.props.onAddClick(text)
      node.value = ''
   }
}
