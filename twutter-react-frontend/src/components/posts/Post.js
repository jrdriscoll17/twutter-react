import React from 'react';
import { connect } from 'react-redux';
import deletePost from '../../actions/posts/deletePost';

function Post(props) {
  const handleDelete = () => {
    props.deletePost(props.post.id);
    props.history.push('/posts');
  };

  return (
    <li>
      {props.post && props.post.id}
      <br />
      {props.post && props.post.content}
      <br />
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default connect(null, { deletePost })(Post);
