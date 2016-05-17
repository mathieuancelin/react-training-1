import React, { PropTypes } from 'react';

import { Todo } from './Todo';

export const TodoList = React.createClass({
  propTypes: {
    todos: PropTypes.array,
    toggleTaskState: PropTypes.func,
  },
  getDefaultProps() {
    return {
      todos: [],
    };
  },
  render() {
    const tasks = this.props.todos.map(todo => {
      return <Todo
        task={todo}
        toggleTaskState={() => this.props.toggleTaskState(todo.id)} />
    });
    return (
      <div style={{
          border: '1px blue solid',
          display: 'flex',
          flexDirection: 'column' }}>
        <h2>Liste des tâches</h2>
        <div style={{ padding: 5 }}>
          {tasks}
        </div>
      </div>
    );
  }
});
