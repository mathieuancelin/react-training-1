import React, { PropTypes } from 'react';

export const Todo = React.createClass({
  propType: {
    task: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      state: PropTypes.oneOf(['NEW', 'STARTED', 'DONE'])
    }),
    toggleTaskState: PropTypes.func,
  },
  render() {
    return (
      <div style={{
          marginBottom: 5,
          border: '1px green solid',
          display: 'flex',
          flexDirection: 'column' }}>
        <h2>{this.props.task.title}</h2>
        <p>{this.props.task.description}</p>
        <small onClick={this.props.toggleTaskState}>{this.props.task.state}</small>
      </div>
    );
  }
});
