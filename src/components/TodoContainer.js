import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import TodosList from './TodosList';
import InputTodo from './InputTodo';

class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then((response) => response.json())
      .then((data) => this.setState({ todos: data }));
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

  setUpdateHandler = (updatedTitle, id) => {
    this.setState((prevTodo) => ({
      todos: prevTodo.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            title: updatedTitle,
          };
        }
        return todo;
      }),
    }));
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
            setUpdateHandler={this.setUpdateHandler}
          />
        </div>
      </div>
    );
  }
}

export default TodoContainer;
