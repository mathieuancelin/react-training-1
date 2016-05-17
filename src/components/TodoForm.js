import React, { PropTypes } from 'react';

export const TodoForm = React.createClass({
  propTypes: {
    createTask: PropTypes.func,
  },
  getInitialState() {
    return {
      title: '',
      description: '',
    };
  },
  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  },
  handleDescriptionChange(e) {
    this.setState({ description: e.target.value });
  },
  createTask() {
    this.props.createTask({
      title: this.state.title,
      description: this.state.description,
    });
    this.setState({
      title: '',
      description: '',
    })
  },
  render() {
    return (
      <div style={{
          marginBottom: 5,
          border: '1px red solid',
          display: 'flex',
          flexDirection: 'column' }}>
        <h2>Nouvelle tâche</h2>
        <input onChange={this.handleTitleChange} value={this.state.title} type="text" placeholder="titre" />
        <input onChange={this.handleDescriptionChange} value={this.state.description} type="text" placeholder="description" />
        <button type="button" onClick={this.createTask}>Créer</button>
      </div>
    );
  }
});
