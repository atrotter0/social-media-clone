import React from 'react';
import '../styles/ProfileInfo.css';

function ProfileInfo() {
  return (
    <div className="profile-info">
      <ul className="actions-box">
        <li>
          <a href="#">TWEETS</a>
        </li>
        <li>
          <a href="#">FOLLOWING</a>
        </li>
        <li>
          <a href="#">FOLOLOWERS</a>
        </li>
      </ul>
    </div>
  );
}

export default ProfileInfo;
