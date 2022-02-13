import React from 'react';
import propTypes from 'prop-types';

const TodoItem = (props) => {
  const { title } = props;
  return <li>{title}</li>;
};

TodoItem.propTypes = {
  title: propTypes.string.isRequired,
};

export default TodoItem;
