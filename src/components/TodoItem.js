import React from 'react';
import propTypes from 'prop-types';

const TodoItem = (props) => {
  const {
    todoID, title, completed, changeHandler,
  } = props;

  const checkBoxChangeHandler = () => {
    changeHandler(todoID);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={checkBoxChangeHandler}
      />
      {title}
    </li>
  );
};

TodoItem.propTypes = {
  title: propTypes.string.isRequired,
  completed: propTypes.bool.isRequired,
  changeHandler: propTypes.func.isRequired,
  todoID: propTypes.number.isRequired,
};

export default TodoItem;
