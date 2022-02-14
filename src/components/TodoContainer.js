/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import Header from './Header';
import TodosList from './TodosList';

class TodoContainer extends Component {
  constructor(props) {
    super(props);
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

  handleChange = (todoID) => {
    this.setState((prevTodo) => ({
      todos: prevTodo.todos.map((todo) => {
        if (todo.id === todoID) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      }),
    }));
  };

  delTodoHandler = (id) => {
    this.setState((prevTodo) => ({
      todos: prevTodo.todos.filter((todo) => todo.id !== id),
    }));
  };

  render() {
    const { todos } = this.state;

    return (
      <>
        <Header />
        <TodosList
          todos={todos}
          changeHandler={this.handleChange}
          deleteHandler={this.delTodoHandler}
        />
      </>
    );
  }
}

export default TodoContainer;
