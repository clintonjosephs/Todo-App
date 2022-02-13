/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import TodosList from './TodosList';

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
        <TodosList todos={todos} />
      </>
    );
  }
}

export default TodoContainer;