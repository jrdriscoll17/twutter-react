import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class Posts extends PureComponent {
  render() {
    return (
      <ul>
        {this.props.posts.map((post) => (
          <>
            <Link to={`/posts/${post.id}`}>{post.name}</Link>
            <br></br>
          </>
        ))}
      </ul>
    );
  }
}

export default Posts;
