import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  const {
    todos, changeHandler, deleteHandler, setUpdateHandler,
  } = props;
  return (
    <ul>
      {todos.map(({ id, title, completed }) => (
        <TodoItem
          key={id}
          title={title}
          completed={completed}
          todoID={id}
          changeHandler={changeHandler}
          deleteHandler={deleteHandler}
          setUpdateHandler={setUpdateHandler}
        />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
  setUpdateHandler: PropTypes.func.isRequired,
};

export default TodoList;
