import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import propTypes from 'prop-types';
import Message from './Message';

const InputTodo = (props) => {
  const [stateData, setData] = useState({
    title: '',
    errorDisplay: 'none',
    message: '',
    cssClass: 'success',
  });

  const {
    title, errorDisplay, message, cssClass,
  } = stateData;

  const titleChangeHandler = (event) => {
    setData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
      errorDisplay: 'none',
    }));
  };

  const todoSubmitHandler = (event) => {
    event.preventDefault();
    if (title.trim()) {
      const { addTodoItemHandler } = props;

      addTodoItemHandler(title);

      setData({
        title: '',
        errorDisplay: 'none',
        message: '',
        cssClass: 'success',
      });

      setTimeout(() => {
        setData((prevState) => ({
          ...prevState,
          errorDisplay: 'none',
        }));
      }, 2000);
    } else {
      setData((prevState) => ({
        ...prevState,
        errorDisplay: 'block',
        message: 'Please, type-in a todo item',
        cssClass: 'error',
      }));
    }
  };

  return (
    <>
      <Message display={errorDisplay} message={message} cssClass={cssClass} />
      <form onSubmit={todoSubmitHandler} className="form-container">
        <input
          type="text"
          className="input-text"
          name="title"
          placeholder="Add Todo ..."
          value={title}
          onChange={titleChangeHandler}
        />
        <button type="submit" className="input-submit">
          <FaPlusCircle
            style={{ color: 'orange', fontSize: '20px', marginTop: '2px' }}
          />
        </button>
      </form>
    </>
  );
};

InputTodo.propTypes = {
  addTodoItemHandler: propTypes.func.isRequired,
};

export default InputTodo;
