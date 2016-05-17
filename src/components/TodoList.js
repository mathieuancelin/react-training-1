import React, { PropTypes } from 'react';

import { Todo } from './Todo';

export const TodoList = React.createClass({
  propTypes: {
    tasks: PropTypes.array,
    toggleStatus: PropTypes.func,
  },
  render() {
    const tasks = this.props.tasks.map(task => {
      return <Todo task={task} toggleStatus={this.props.toggleStatus} />
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
