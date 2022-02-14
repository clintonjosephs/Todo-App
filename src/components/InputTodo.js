import React, { useState } from 'react';
import propTypes from 'prop-types';
import Message from './Message';

const InputTodo = (props) => {
  const [stateData, setState] = useState({
    title: '',
    errorDisplay: 'none',
    message: '',
  });

  const { title, errorDisplay, message } = stateData;

  const titleChangeHandler = (event) => {
    setState((prevState) => ({
      ...prevState,
      title: event.target.value,
      errorDisplay: 'none',
    }));
  };

  const todoSubmitHandler = (event) => {
    event.preventDefault();
    if (title.trim()) {
      const { addTodoItemHandler } = props;

      addTodoItemHandler(title);

      setState({
        title: '',
        errorDisplay: 'block',
        message: 'Item added to list successfully',
      });

      setTimeout(() => {
        setState({
          errorDisplay: 'none',
        });
      }, 2000);
    } else {
      setState({
        errorDisplay: 'block',
        message: 'Please, type-in a todo item',
      });
    }
  };

  return (
    <>
      <Message display={errorDisplay} message={message} />
      <form onSubmit={todoSubmitHandler} className="form-container">
        <input
          type="text"
          className="input-text"
          name="title"
          placeholder="Add Todo ..."
          value={title}
          onChange={titleChangeHandler}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

InputTodo.propTypes = {
  addTodoItemHandler: propTypes.func.isRequired,
};

export default InputTodo;
