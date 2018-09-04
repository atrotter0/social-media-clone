import React from 'react';
import '../styles/Search.css';

export function Search() {
  return (
    <div className="search">
      <input type="text" placeholder="Search" className="search-box" />
      <button onClick={tweet} className="btn btn-lg btn-outline-primary">Tweet!</button>
    </div>
  );
}

export function tweet() {
  alert("Poop nuggets!");
}
