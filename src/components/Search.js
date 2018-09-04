import React from 'react';

export function Search() {
  return (
    <div>
      <input type="text" placeholder="Search" />
      <button onclick="tweet()">Tweet!</button>
    </div>
  );
}

export function tweet() {
  alert("Tweeted!");
}
