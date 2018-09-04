import React from 'react';
import Details from './Details';
import Bio from './Bio';
import '../styles/Profile.css';

function Profile() {
  return (
    <div className="profile">
      <Details />
      <Bio />
    </div>
  );
}

export default Profile;
