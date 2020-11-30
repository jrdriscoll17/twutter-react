import React from 'react';
import { connect } from 'react-redux';
import deletePost from '../actions/deletePost';
import PostForm from './PostForm';

function Post(props) {
  const handleDelete = () => {
    props.deletePost(props.post.id);
    props.history.push('/posts');
  };

  return (
    <>
      <li>
        {props.post && props.post.name}{' '}
        <button onClick={handleDelete}>Delete</button>
      </li>
      <PostForm post={props.post} />
    </>
  );
}

export default connect(null, { deletePost })(Post);
