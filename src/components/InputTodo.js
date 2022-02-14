import React, { Component } from 'react';
import propTypes from 'prop-types';
import Message from './Message';

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      errorDisplay: 'none',
      message: '',
    };
  }

  titleChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      errorDisplay: 'none',
    });
  };

  todoSubmitHandler = (event) => {
    event.preventDefault();
    const { title } = this.state;
    if (title.trim()) {
      const { addTodoItemHandler } = this.props;

      addTodoItemHandler(title);

      this.setState({
        title: '',
        errorDisplay: 'block',
        message: 'Item added to list successfully',
      });

      setTimeout(() => {
        this.setState({
          errorDisplay: 'none',
        });
      }, 2000);
    } else {
      this.setState({
        errorDisplay: 'block',
        message: 'Please, type-in a todo item',
      });
    }
  };

  render() {
    const { title, errorDisplay, message } = this.state;
    return (
      <>
        <Message display={errorDisplay} message={message} />
        <form onSubmit={this.todoSubmitHandler}>
          <input
            type="text"
            name="title"
            placeholder="Add Todo ..."
            value={title}
            onChange={this.titleChangeHandler}
          />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

InputTodo.propTypes = {
  addTodoItemHandler: propTypes.func.isRequired,
};

export default InputTodo;
