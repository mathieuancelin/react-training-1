import React from 'react';

import { TodoForm } from './TodoForm';
import { TodoStats } from './TodoStats';
import { TodoFilters } from './TodoFilters';
import { TodoList } from './TodoList';

export const TodoDashboardApp = React.createClass({
  render() {
    return (
      <div style={{
            padding: 5,
            width: '800px',
            display: 'flex',
            border: '1px black solid' }}>
        <div style={{
            padding: 5,
            width: '30%',
            display: 'flex',
            flexDirection: 'column' }}>
          <TodoForm />
          <TodoStats />
        </div>
        <div style={{
            padding: 5,
            width: '70%',
            display: 'flex',
            flexDirection: 'column' }}>
          <TodoFilters />
          <TodoList />
        </div>
      </div>
    );
  }
});
