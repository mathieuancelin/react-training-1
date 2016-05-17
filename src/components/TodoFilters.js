import React from 'react';

export const TodoFilters = React.createClass({
  render() {
    return (
      <div style={{
          marginBottom: 5,
          border: '1px yellow solid',
          display: 'flex',
          flexDirection: 'column' }}>
        <h2>Filtres</h2>
        <div>
          <input type="checkbox" /> nouvelles
          <input type="checkbox" /> en cours
          <input type="checkbox" /> terminées
        </div>
      </div>
    );
  }
});
