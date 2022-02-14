import React, { Component } from 'react';
import propTypes from 'prop-types';

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  titleChangeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  todoSubmitHandler = (event) => {
    event.preventDefault();
    const { title } = this.state;
    const { addTodoItemHandler } = this.props;
    addTodoItemHandler(title);
    this.setState({
      title: '',
    });
  };

  render() {
    const { title } = this.state;
    return (
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
    );
  }
}

InputTodo.propTypes = {
  addTodoItemHandler: propTypes.func.isRequired,
};

export default InputTodo;
