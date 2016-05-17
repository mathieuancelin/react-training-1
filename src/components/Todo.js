import React from 'react';

export const Todo = React.createClass({
  render() {
    return (
      <div style={{
          marginBottom: 5,
          border: '1px green solid',
          display: 'flex',
          flexDirection: 'column' }}>
        <h2>Titre de la tâche</h2>
        <div>
          description de la tâche
        </div>
        <small>Tâche en cours</small>
      </div>
    );
  }
});
