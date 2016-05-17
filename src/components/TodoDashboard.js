import React from 'react';

import { TodoForm } from './TodoForm';
import { TodoStats } from './TodoStats';
import { TodoFilters } from './TodoFilters';
import { TodoList } from './TodoList';

function uuid() {
  var d = Date.now();
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (d + Math.random()*16)%16 | 0;
    d = Math.floor(d/16);
    return (c=='x' ? r : (r&0x7|0x8)).toString(16);
  });
}

export const TodoDashboardApp = React.createClass({
  getInitialState() {
    return {
      todos: [],
      showNewTasks: true,
      showStartedTasks: true,
      showDoneTasks: true,
    };
  },
  createTask(task) {
    const actualTask = { ...task, id: uuid(), state: 'NEW' };
    this.setState({ todos: [...this.state.todos, actualTask] });
  },
  toggleFilter(name) {
    if (name === 'NEW') {
      this.setState({ showNewTasks: !this.state.showNewTasks });
    }
    if (name === 'STARTED') {
      this.setState({ showStartedTasks: !this.state.showStartedTasks });
    }
    if (name === 'DONE') {
      this.setState({ showDoneTasks: !this.state.showDoneTasks });
    }
  },
  toggleTaskState(id) {
    const task = this.state.todos.filter(t => t.id === id)[0];
    const others = this.state.todos.filter(t => t.id !== id);
    const newTask = { ...task };
    if (newTask.state === 'STARTED') newTask.state = 'DONE';
    if (newTask.state === 'NEW') newTask.state = 'STARTED';
    this.setState({ todos: [...others, newTask ] })
  },
  filterTasks(todos) {
    return [
      ...this.state.todos.filter(t => t.state === 'NEW' && this.state.showNewTasks),
      ...this.state.todos.filter(t => t.state === 'STARTED' && this.state.showStartedTasks),
      ...this.state.todos.filter(t => t.state === 'DONE' && this.state.showDoneTasks),
    ];
  },
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
          <TodoForm createTask={this.createTask} />
          <TodoStats
            nbrNewTasks={this.state.todos.filter(t => t.state === 'NEW').length}
            nbrStartedTasks={this.state.todos.filter(t => t.state === 'STARTED').length}
            nbrDoneTasks={this.state.todos.filter(t => t.state === 'DONE').length} />
        </div>
        <div style={{
            padding: 5,
            width: '70%',
            display: 'flex',
            flexDirection: 'column' }}>
          <TodoFilters
            showDoneTasks={this.state.showDoneTasks}
            showStartedTasks={this.state.showStartedTasks}
            showNewTasks={this.state.showNewTasks}
            onChange={this.toggleFilter} />
          <TodoList toggleTaskState={this.toggleTaskState} todos={this.filterTasks()} />
        </div>
      </div>
    );
  }
});
