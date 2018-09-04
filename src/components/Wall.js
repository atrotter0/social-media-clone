import React from 'react';
import '../styles/Wall.css';
import Posts from './Posts';

const posts = [
  { user: "Sad A. Non", message: "Had a great weekend doing something fun." },
  { user: "Sad A. Non", message: "Gdi im such a badass. #flex" },
  { user: "Yorm Omm", message: "Great job, sweetie." }
];

function Wall() {
  return (
    <div className="wall">
      { posts.map((post, index) =>
        <Posts user={post.user}
          message={post.message}
          key={index} />
      )}
    </div>
  );
}

export default Wall;
