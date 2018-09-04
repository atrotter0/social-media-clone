import React from 'react';
import NavBar from './NavBar.js';
import { Search, tweet } from './Search.js';

function Header() {
  return (
    <div>
      <NavBar />
      <Search />
    </div>
  );
}

export default Header;
