import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import { TodoDashboardApp } from './components/TodoDashboard';

const Task = React.createClass({
  render() {
    return (
      <div>{this.props.task}</div>
    );
  }
});

const NewTask = React.createClass({
  handleClick() {
    this.props.add(`task ${Date.now()}`)
  },
  render() {
    return (
      <button type="button" onClick={this.handleClick}>+1</button>
    );
  }
})

const App = React.createClass({
  getInitialState() {
    return {
      tasks: ['task 0']
    };
  },
  addTask(name) {
    this.setState({ tasks: [...this.state.tasks, name] });
  },
  render() {
    return (
      <div>
        <h1>title</h1>
        <NewTask add={this.addTask} />
        <ul>
          {this.state.tasks.map(t => <Task task={t} />)}
        </ul>
      </div>
    );
  }
});


export function init() {
  ReactDOM.render(
    <TodoDashboardApp />,
    document.getElementById('app'));
}
