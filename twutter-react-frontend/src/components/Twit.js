import React from 'react';
import { connect } from 'react-redux';
import deleteTwit from '../actions/deleteTwit';
import TwitForm from './TwitForm';

function List(props) {
  const handleDelete = () => {
    props.deleteTwit(props.twit.id);
    props.history.push('/twits');
  };

  return (
    <>
      <li>
        {props.twit && props.twit.name}{' '}
        <button onClick={handleDelete}>Delete</button>
      </li>
      <TwitForm twit={props.twit} />
    </>
  );
}

export default connect(null, { deleteList })(List);
