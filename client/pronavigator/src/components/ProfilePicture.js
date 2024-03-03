// ProfilePicture.js
import React from 'react';
import '../styles/ProfilePicture.css';

const ProfilePicture = ({ src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png", alt }) => {
  return (
    <div className="profile-picture-container">
      <img className="profile-picture" src={src} alt={alt} />
    </div>
  );
};

export default ProfilePicture;