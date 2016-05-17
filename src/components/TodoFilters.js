import React, { PropTypes } from 'react';

export const Checkbox = React.createClass({
  propTypes: {
    lable: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
  },
  render() {
    const props = {};
    if (this.props.checked) {
      props.checked = 'checked';
    }
    return (
      <div>
        <input type="checkbox"
          onChange={this.props.onChange}
          {...props} />
        <span>{this.props.label}</span>
      </div>
    );
  }
});

export const TodoFilters = React.createClass({
  propTypes: {
    onChange: React.PropTypes.func,
    showNewTasks: React.PropTypes.bool,
    showStartedTasks: React.PropTypes.bool,
    showDoneTasks: React.PropTypes.bool,
  },
  render() {
    return (
      <div style={{
          marginBottom: 5,
          border: '1px yellow solid',
          display: 'flex',
          flexDirection: 'column' }}>
        <h2>Filtres</h2>
        <div style={{ display: 'flex' }}>
          <Checkbox onChange={() => this.props.onChange('NEW')} label="nouvelles" checked={this.props.showNewTasks} />
          <Checkbox onChange={() => this.props.onChange('STARTED')} label="en cours" checked={this.props.showStartedTasks} />
          <Checkbox onChange={() => this.props.onChange('DONE')} label="terminées" checked={this.props.showDoneTasks} />
        </div>
      </div>
    );
  }
});
