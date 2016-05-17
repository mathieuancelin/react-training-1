import React from 'react';

export const TodoStats = React.createClass({
  render() {
    return (
      <div style={{
          border: '1px purple solid',
          display: 'flex',
          flexDirection: 'column' }}>
        <h2>Statistiques</h2>
        <div>Nouvelles tâches : 0</div>
        <div>Tâches en cours : 0</div>
        <div>Tâches terminées : 0</div>
      </div>
    );
  }
});
