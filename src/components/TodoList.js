import React from 'react';

import { Todo } from './Todo';

export const TodoList = React.createClass({
  render() {
    return (
      <div style={{ border: '1px blue solid', display: 'flex', flexDirection: 'column' }}>
        <h2>Liste des tâches</h2>
        <div style={{ padding: 5 }}>
          <Todo />
          <Todo />
          <Todo />
        </div>
      </div>
    );
  }
});
