import React from 'react';
import '../styles/Details.css';
import CoverPhoto from './CoverPhoto';
import ProfilePhoto from './ProfilePhoto';
import ProfileInfo from './ProfileInfo';
import ProfileName from './ProfileName';

function Details() {
  return (
    <div className="details">
      <CoverPhoto />
      <div className="profile-box">
        <div className="profile-photo">
          <ProfilePhoto />
        </div>
        <ProfileName />
      </div>
      <ProfileInfo />
    </div>
  );
}

export default Details;
