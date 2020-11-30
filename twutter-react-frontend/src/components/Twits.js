import React, { PureComponent, Fragment } from 'react';
import Twit from './Twit';
import { Link } from 'react-router-dom';

class Twits extends PureComponent {
  render() {
    return (
      <ul>
        {this.props.twits.map((twit) => (
          <>
            <Link to={`/twits/${twit.id}`}>{twit.name}</Link>
            <br></br>
          </>
        ))}
      </ul>
    );
  }
}

export default Twits;
