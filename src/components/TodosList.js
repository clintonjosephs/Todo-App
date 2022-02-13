import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoList extends Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    const { todos } = this.props;
    return (
      <ul>
        {todos.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TodoList;
