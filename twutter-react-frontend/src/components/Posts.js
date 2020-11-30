import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class Posts extends PureComponent {
  render() {
    return (
      <ul>
        {this.props.posts.map((post) => (
          <>
            <Link key={post.id}>
              <h2>{post.id}</h2>
            </Link>
            <p>{post.content}</p>
          </>
        ))}
      </ul>
    );
  }
}

export default Posts;
