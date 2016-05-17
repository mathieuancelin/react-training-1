import React from 'react';

import { TodoForm } from './TodoForm';
import { TodoStats } from './TodoStats';
import { TodoFilters } from './TodoFilters';
import { TodoList } from './TodoList';

let counter = 0;

function id() {
  return `id-${++counter}`;
}


export const TodoDashboardApp = React.createClass({
  getInitialState() {
    return {
      tasks: [],
      showNewTasks: true,
      showStartedTasks: true,
      showDoneTasks: true,
    };
  },
  toggleStatus(id) {
    const tasks = [...this.state.tasks];
    const task = tasks.filter(t => t.id === id)[0];
    if (task.status === 'STARTED') task.status = 'DONE';
    if (task.status === 'NEW') task.status = 'STARTED';
    this.setState({ tasks });
  },
  toggleFilters(filter) {
    if (filter === 'NEW') {
      this.setState({ showNewTasks: !this.state.showNewTasks });
    }
    if (filter === 'STARTED') {
      this.setState({ showStartedTasks: !this.state.showStartedTasks });
    }
    if (filter === 'DONE') {
      this.setState({ showDoneTasks: !this.state.showDoneTasks });
    }
  },
  createTask(task) {
    const actualTask = Object.assign({}, task, { id: id(), status: 'NEW' });
    this.setState({ tasks: [...this.state.tasks, actualTask] });
  },
  filteredTasks() {
    return [
      ...this.state.tasks.filter(t => t.status === 'NEW' && this.state.showNewTasks),
      ...this.state.tasks.filter(t => t.status === 'STARTED' && this.state.showStartedTasks),
      ...this.state.tasks.filter(t => t.status === 'DONE' && this.state.showDoneTasks),
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
            nbrNewTasks={this.state.tasks.filter(t => t.status === 'NEW').length}
            nbrStartedTasks={this.state.tasks.filter(t => t.status === 'STARTED').length}
            nbrDoneTasks={this.state.tasks.filter(t => t.status === 'DONE').length} />
        </div>
        <div style={{
            padding: 5,
            width: '70%',
            display: 'flex',
            flexDirection: 'column' }}>
          <TodoFilters
            showNewTasks={this.state.showNewTasks}
            showStartedTasks={this.state.showStartedTasks}
            showDoneTasks={this.state.showDoneTasks}
            toggleFilters={this.toggleFilters} />
          <TodoList
            tasks={this.filteredTasks()}
            toggleStatus={this.toggleStatus} />
        </div>
      </div>
    );
  }
});
