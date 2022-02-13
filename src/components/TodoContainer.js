/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';

class TodoContainer extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          id: 1,
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: 2,
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: 3,
          title: 'Deploy to live server',
          completed: false,
        },
      ],
    };
  }

  render() {
    const { todos } = this.state;

    return (
      <>
        <ul>
          {todos.map(({ id, title }) => (
            <li key={id}>{title}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default TodoContainer;
