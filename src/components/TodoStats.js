import React, { PropTypes } from 'react';

export const TodoStats = React.createClass({
  propTypes: {
    nbrNewTasks: PropTypes.number,
    nbrStartedTasks: PropTypes.number,
    nbrDoneTasks: PropTypes.number,
  },
  render() {
    return (
      <div style={{
          border: '1px purple solid',
          display: 'flex',
          flexDirection: 'column' }}>
        <h2>Statistiques</h2>
        <div>Nouvelles tâches : {this.props.nbrNewTasks}</div>
        <div>Tâches en cours : {this.props.nbrStartedTasks}</div>
        <div>Tâches terminées : {this.props.nbrDoneTasks}</div>
      </div>
    );
  }
});
