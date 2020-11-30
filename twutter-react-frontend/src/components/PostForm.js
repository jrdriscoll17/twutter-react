import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import addPost from '../actions/addPost';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.post ? this.props.post.name : '',
      id: this.props.post ? this.props.post.id : '',
    };
  }

  handleSubmit(event) {
    debugger;
    event.preventDefault();
    this.props.addPost(this.state);

    this.setState({ name: '', id: '' });
    this.props.history.push('/posts');
  }

  handleChange(event) {
    let name = event.target.name;
    this.setState({
      [name]: event.target.value,
    });
  }

  redirectOrRenderForm() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <input
          type='text'
          onChange={(event) => this.handleChange(event)}
          value={this.state.name}
          name='name'
        />
        <input type='submit' />
      </form>
    );
  }

  render() {
    return <>{this.redirectOrRenderForm()}</>;
  }
}

export default withRouter(connect(null, { addPost })(PostForm));
