import React from 'react';
import '../styles/NavBar.css';

function NavBar() {
  return (
    <div className="nav">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Notifications</a>
        </li>
        <li>
          <a href="#">Messages</a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
