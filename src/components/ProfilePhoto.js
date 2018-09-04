import React from 'react';
import profileImagePlaceholder from '../assets/images/sad-anon.jpg';
import '../styles/ProfilePhoto.css';

function ProfilePhoto() {
  return (
    <div className="profilePhoto">
      <img src={profileImagePlaceholder} />
    </div>
  );
}

export default ProfilePhoto;
