import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import TodosList from './TodosList';
import InputTodo from './InputTodo';
import Storage from './Data/Storage';

const TodoContainer = () => {
  const [todos, setTodo] = useState(Storage.getData());

  const handleChange = (todoID) => {
    setTodo((prevTodo) => prevTodo.map((todo) => {
      if (todo.id === todoID) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    }));
  };

  const delTodoHandler = (id) => {
    setTodo((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
  };

  const addTodoItemHandler = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setTodo((prevTodo) => [...prevTodo, newTodo]);
  };

  const setUpdateHandler = (updatedTitle, id) => {
    setTodo((prevTodo) => prevTodo.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          title: updatedTitle,
        };
      }
      return todo;
    }));
  };

  useEffect(() => {
    const loadedTodos = Storage.getData();
    if (loadedTodos) {
      setTodo(loadedTodos);
    }
  }, [setTodo]);

  useEffect(() => {
    Storage.setData(todos);
  }, [todos]);

  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo addTodoItemHandler={addTodoItemHandler} />
        {todos.length > 0 ? (
          <TodosList
            todos={todos}
            changeHandler={handleChange}
            deleteHandler={delTodoHandler}
            setUpdateHandler={setUpdateHandler}
          />
        ) : (
          <h3>No items added to list</h3>
        )}
      </div>
    </div>
  );
};

export default TodoContainer;
