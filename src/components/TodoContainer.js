/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import Header from './Header';
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

  handleChange = (id) => {
    console.log('clicked', id);
  };

  render() {
    const { todos } = this.state;

    return (
      <>
        <Header />
        <TodosList todos={todos} changeHandler={this.handleChange} />
      </>
    );
  }
}

export default TodoContainer;
