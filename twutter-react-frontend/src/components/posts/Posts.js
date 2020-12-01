import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class Posts extends PureComponent {
  render() {
    return (
      <ul>
        {this.props.posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>
              <h2>{post.user.name}</h2>
            </Link>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default Posts;
