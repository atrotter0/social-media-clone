import React from 'react';
import '../styles/Posts.css';

function Posts(props) {
  return (
    <div className="post">
      <h3>{props.user}</h3>
      <p>{props.message}</p>
    </div>
  );
}

export default Posts;
