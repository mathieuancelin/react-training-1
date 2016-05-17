import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import { TodoDashboardApp } from './components/TodoDashboard';

export function init() {
  ReactDOM.render(
    <TodoDashboardApp />,
    document.getElementById('app'));
}
