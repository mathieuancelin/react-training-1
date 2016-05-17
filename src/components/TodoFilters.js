import React, { PropTypes } from 'react';

export const TodoFilters = React.createClass({
  propTypes: {
    showNewTasks: PropTypes.bool,
    showStartedTasks: PropTypes.bool,
    showDoneTasks: PropTypes.bool,
    toggleFilters: PropTypes.func,
  },
  render() {
    return (
      <div style={{
          marginBottom: 5,
          border: '1px yellow solid',
          display: 'flex',
          flexDirection: 'column' }}>
        <h2>Filtres</h2>
        <div>
          <input onChange={() => this.props.toggleFilters('NEW')} checked={this.props.showNewTasks} type="checkbox" /> nouvelles
          <input onChange={() => this.props.toggleFilters('STARTED')} checked={this.props.showStartedTasks} type="checkbox" /> en cours
          <input onChange={() => this.props.toggleFilters('DONE')} checked={this.props.showDoneTasks} type="checkbox" /> terminées
        </div>
      </div>
    );
  }
});
