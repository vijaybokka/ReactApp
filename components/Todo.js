import React, { Component, PropTypes } from 'react'

export default class Todo extends Component {

   render() {
    console.log('Todo called');
      return (
         <li>
            {this.props.text}
         </li>
      )
   }
}
