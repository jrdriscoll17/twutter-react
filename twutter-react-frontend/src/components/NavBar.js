import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar(props) {
  return (
    <div className='navBar'>
      <Link to='/posts'>All Posts</Link>
      <Link to='/posts/new'>New Post</Link>
    </div>
  );
}
