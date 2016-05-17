import React, { PropTypes } from 'react';

export const Todo = React.createClass({
  propTypes: {
    task: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      status: PropTypes.oneOf(['NEW', 'STARTED', 'DONE']),
    }),
    toggleStatus: PropTypes.func,
  },
  toggleStatus() {
    this.props.toggleStatus(this.props.task.id);
  },
  render() {
    return (
      <div style={{
          marginBottom: 5,
          border: '1px green solid',
          display: 'flex',
          flexDirection: 'column' }}>
        <h2>{this.props.task.title}</h2>
        <div>
          {this.props.task.description}
        </div>
        <small onClick={this.toggleStatus}>
          {this.props.task.status}
        </small>
      </div>
    );
  }
});
