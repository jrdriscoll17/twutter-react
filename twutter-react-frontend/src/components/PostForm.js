import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import addPost from '../actions/addPost';

class PostForm extends Component {
  state = {
    content: '',
  };

  handleSubmit(event) {
    event.preventDefault();
    this.props.addPost(this.state);

    this.setState({ content: '' });
    this.props.history.push('/posts');
  }

  handleChange(event) {
    this.setState({
      content: event.target.value,
    });
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <input
          type='text'
          onChange={(event) => this.handleChange(event)}
          value={this.state.content}
          name='content'
        />
        <input type='submit' />
      </form>
    );
  }
}

export default withRouter(connect(null, { addPost })(PostForm));
