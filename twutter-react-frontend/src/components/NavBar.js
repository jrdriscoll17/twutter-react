import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar(props) {
  return (
    <>
      <Link to='/twits'>All Twits</Link>
      <Link to='/twits/new'>New Twit</Link>
    </>
  );
}
