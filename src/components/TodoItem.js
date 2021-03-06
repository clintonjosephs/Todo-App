import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { BsCheckLg } from 'react-icons/bs';
import propTypes from 'prop-types';
import styles from './styles/TodoItem.module.css';

const TodoItem = (props) => {
  const {
    todoID,
    title,
    completed,
    changeHandler,
    deleteHandler,
    setUpdateHandler,
  } = props;

  const [editing, setEditing] = useState(false);

  const checkBoxChangeHandler = () => {
    changeHandler(todoID);
  };

  const deleteToDoItemHandler = () => {
    deleteHandler(todoID);
  };

  const handleEditing = () => {
    setEditing(true);
  };

  const editChangeHandler = (event) => {
    setUpdateHandler(event.target.value, todoID);
  };

  const handleUpdateDone = (event) => {
    if (event.keyCode === 13) {
      setEditing(false);
    }
  };

  const completedStyle = {
    fontStyle: 'italic',
    color: '#ffff',
    textDecoration: 'line-through',
  };

  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        {!completed ? (
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={completed}
            onChange={checkBoxChangeHandler}
          />
        ) : (
          <BsCheckLg
            onClick={checkBoxChangeHandler}
            style={{ marginRight: '20px', color: 'orange' }}
          />
        )}
        <button type="button" onClick={deleteToDoItemHandler}>
          <FaTrash style={{ color: 'orangered', fontSize: '16px' }} />
        </button>
        <span style={completed ? completedStyle : null}>{title}</span>
      </div>
      <input
        type="text"
        className={styles.textInput}
        style={editMode}
        value={title}
        onChange={editChangeHandler}
        onKeyDown={handleUpdateDone}
      />
    </li>
  );
};

TodoItem.propTypes = {
  title: propTypes.string.isRequired,
  completed: propTypes.bool.isRequired,
  changeHandler: propTypes.func.isRequired,
  todoID: propTypes.string.isRequired,
  deleteHandler: propTypes.func.isRequired,
  setUpdateHandler: propTypes.func.isRequired,
};

export default TodoItem;
