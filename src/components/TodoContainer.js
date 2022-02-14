/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import TodosList from './TodosList';
import InputTodo from './InputTodo';

class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: '1',
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: '2',
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: '3',
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

  addTodoItemHandler = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    this.setState((prevTodo) => ({ todos: [...prevTodo.todos, newTodo] }));
  };

  render() {
    const { todos } = this.state;

    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodoItemHandler={this.addTodoItemHandler} />
          <TodosList
            todos={todos}
            changeHandler={this.handleChange}
            deleteHandler={this.delTodoHandler}
          />
        </div>
      </div>
    );
  }
}

export default TodoContainer;
