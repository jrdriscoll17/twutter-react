import React, { PureComponent } from 'react';
import Twits from './Twits';
import Twit from './Twit';
import TwitForm from './TwitForm';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import fetchTwits from '../actions/fetchTwits';

class ListContainer extends PureComponent {
  componentDidMount() {
    this.props.fetchTwits();
  }

  render() {
    return (
      <Switch>
        <Route exact path='/twits'>
          <Twits twits={this.props.twits} />
        </Route>
        <Route exact path='/twits/new'>
          <TwitForm />
        </Route>
        <Route
          exact
          path='/twits/:id'
          render={(routerProps) => (
            <Twit
              {...routerProps}
              twit={this.props.twits.find(
                (twit) => twit.id === parseInt(routerProps.match.params.id)
              )}
            />
          )}
        />
      </Switch>
    );
  }
}

const mapStateToProps = ({ twits }) => {
  return {
    twits,
  };
};

export default connect(mapStateToProps, { fetchTwits })(ListContainer);
