import React from 'react';
import { connect } from 'react-redux';
import deletePost from '../../actions/posts/deletePost';

function Post(props) {
  const handleDelete = () => {
    props.deletePost(props.post.id);
    props.history.push('/posts');
  };

  return (
    <li className='post'>
      <h2>{props.post && props.post.user.name}</h2>
      <br />
      <p>{props.post && props.post.content}</p>
      <br />
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default connect(null, { deletePost })(Post);
