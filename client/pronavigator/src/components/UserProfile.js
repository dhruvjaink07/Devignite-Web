// UserProfile.js
import React from 'react';
import ProfilePicture from './UserProfile';
import '../styles/UserProfile.css';

const UserProfile = ({ user }) => {
  // Check if the user object is defined before attempting to destructure
  if (!user) {
    return <p>Loading...</p>; // or any other handling for undefined user
  }

  const { name, username, email, bio, imageUrl } = user;

  return (
    <div className="user-profile">
      <div className="profile-header">
        <ProfilePicture imageUrl={imageUrl} altText={`${name}'s Profile Picture`} />
        <h2>{name}</h2>
        <p>@{username}</p>
      </div>
      <div className="profile-details">
        <h3>Contact Information</h3>
        <p>Email: {email}</p>
      </div>
      <div className="profile-bio">
        <h3>Bio</h3>
        <p>{bio}</p>
      </div>
      {/* Add more sections or customize as needed */}
    </div>
  );
};

export default UserProfile;
