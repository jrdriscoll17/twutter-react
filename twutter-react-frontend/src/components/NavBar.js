import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar(props) {
  return (
    <>
      <Link to='/posts'>All Posts</Link>
      <Link to='/posts/new'>New Post</Link>
    </>
  );
}
