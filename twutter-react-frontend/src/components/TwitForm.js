import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import addTwit from './actions/addTwit';
import editTwit from './actions/editTwit';

class TwitForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.twit ? this.props.twit.name : '',
      id: this.props.twit ? this.props.twit.id : '',
    };
  }

  handleSubmit(event) {
    console.log('handlesubmit');
    event.preventDefault();
    if (!this.props.twit) {
      this.props.addTwit(this.state);
    } else {
      this.props.editTwit(this.state);
    }

    this.setState({ name: '', id: '' });
    this.props.history.push('/twits');
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

export default withRouter(connect(null, { addTwit, editTwit })(TwitForm));
