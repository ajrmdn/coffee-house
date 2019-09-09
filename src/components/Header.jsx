import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
  <div>
    <h1>Welcome to Blakes Cold Brews!</h1>
    <Link to="/">Home</Link> | <Link to="/newbrew">Add Brew</Link>
  </div>

  );
}

export default Header;
