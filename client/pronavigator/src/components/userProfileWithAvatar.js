// UserProfileWithAvatarPicker.js
import React, { useState } from 'react';
import '../styles/UserProfileWithAvatar.css';

function UserProfileWithAvatarPicker() {
    const [userData, setUserData] = useState({
        name: 'John Doe',
        email: 'john@example.com',
        username: 'johndoe123',
        avatarUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
        aboutMe: "Hello, I'm John Doe, a passionate coder and software developer. My journey in the world of programming started several years ago.",
        phoneNumber: '+1234567890',
        birthday: 'January 1, 1990',
        location: 'City, Country',
        achievements: ['5-day consecutive login streak!',
        'Contributed to 10 open-source projects.',
        'Resolved 50 GitHub issues.',
        'Collaborated on a team project for a major feature implementation.',
        'Mentored junior developers in coding best practices.',
        'Participated in a hackathon and won 2nd place.',
        'Published a personal coding blog post.',],
        firstname:'john',
        lastname:'doe'
    });

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        const newAvatarUrl = file ? URL.createObjectURL(file) : null;
        setUserData({ ...userData, avatarUrl: newAvatarUrl });
    };

    const handleAvatarClick = () => {
        document.getElementById('avatar-input').click();
    };

    return (
        <div className="user-profile-container">
            <div className='flex-parent'>
                {/* First Floating Window */}
            <div className="user-profile-content" onClick={handleAvatarClick}>
                <div className="user-details">
                    <input
                        type="file"
                        id="avatar-input"
                        onChange={handleAvatarChange}
                        accept="image/png, image/jpeg"
                        style={{ display: 'none' }}
                    />
                    <img src={userData.avatarUrl} alt="User Avatar" className="user-avatar" />
                    <div className="user-info">
                        <h2>{userData.name}</h2>
                        <p>{userData.email}</p>
                    </div>
                </div>
            </div>

            {/* Second Floating Window */}
            <div className="user-profile-content second-window">
                <div className="personal">
                    <div className="about-me">
                        <h2>About Me</h2>
                        <p>{userData.aboutMe}</p>
                    </div>
                    <br />
                    <div className="personal-info">
                        <h2>Personal Info</h2>
                        <p><strong>First Name:</strong> {userData.firstname}</p>
                        <p><strong>Last Name:</strong> {userData.lastname}</p>
                        <p><strong>User Name:</strong> {userData.username}</p>
                    </div>
                </div>
            </div>


            </div>
            
            {/* Third Floating Window (Achievements) */}
            <div className="user-profile-content third-window">
                <div className="achievements">
                    <h2>Achievements</h2>
                    <ul className='listachieve'>
                        {userData.achievements.map((contribution, index) => (
                            <li key={index}>{contribution}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default UserProfileWithAvatarPicker;
