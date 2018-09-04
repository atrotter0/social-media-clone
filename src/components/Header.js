import React from 'react';
import NavBar from './NavBar.js';
import { Search, tweet } from './Search.js';
import '../styles/Header.css';

function Header() {
  return (
    <div>
      <div className="header">
        <NavBar />
        <Search />
      </div>
      <hr/>
    </div>
  );
}

export default Header;
