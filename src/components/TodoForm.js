import React from 'react';

export const TodoForm = React.createClass({
  render() {
    return (
      <div style={{
          marginBottom: 5,
          border: '1px red solid',
          display: 'flex',
          flexDirection: 'column' }}>
        <h2>Nouvelle tâche</h2>
        <input type="text" placeholder="titre" />
        <input type="text" placeholder="description" />
        <button type="button">Créer</button>
      </div>
    );
  }
});
