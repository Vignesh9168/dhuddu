import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ avatar, name, position, description }) => {
  return (
    <div className="profile-card">
      <img src={avatar} alt={`${name}'s avatar`} className="profile-avatar" />
      <h2 className="profile-name">{name}</h2>
      <h3 className="profile-position">{position}</h3>
      <p className="profile-description">{description}</p>
    </div>
  );
};

export default ProfileCard;
