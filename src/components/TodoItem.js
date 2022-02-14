import React from 'react';
import propTypes from 'prop-types';

const TodoItem = (props) => {
  const {
    todoID, title, completed, changeHandler, deleteHandler,
  } = props;

  const checkBoxChangeHandler = () => {
    changeHandler(todoID);
  };

  const deleteToDoItemHandler = () => {
    deleteHandler(todoID);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={checkBoxChangeHandler}
      />
      <button type="button" onClick={deleteToDoItemHandler}>
        Delete
      </button>
      {title}
    </li>
  );
};

TodoItem.propTypes = {
  title: propTypes.string.isRequired,
  completed: propTypes.bool.isRequired,
  changeHandler: propTypes.func.isRequired,
  todoID: propTypes.string.isRequired,
  deleteHandler: propTypes.func.isRequired,
};

export default TodoItem;
