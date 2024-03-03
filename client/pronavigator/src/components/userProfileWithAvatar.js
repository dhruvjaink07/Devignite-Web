import React, { useState } from 'react';

function UserProfileWithAvatarPicker() {
    const [userData, setUserData] = useState({
        name: 'John Doe',
        email: 'john@example.com',
        username: 'johndoe123',
        avatarUrl: 'https://www.bing.com/images/search?view=detailV2&ccid=eGHa3HgH&id=B58987562EABE18556108F1BE5D0197B0ADBA6BA&thid=OIP.eGHa3HgHxIlTHmcvKNDs7AHaGe&mediaurl=https%3a%2f%2fwww.pngitem.com%2fpimgs%2fm%2f150-1503945_transparent-user-png-default-user-image-png-png.png&exph=752&expw=860&q=default+user&simid=608016899903603461&FORM=IRPRST&ck=65C21D68D02D5D43B020FB12EED14302&selectedIndex=0&itb=0' // Provide a default avatar image URL
    });

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        const newAvatarUrl = URL.createObjectURL(file);
        setUserData({ ...userData, avatarUrl: newAvatarUrl });
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h2>User Profile</h2>
                    <div>
                        <img src={userData.avatarUrl} alt="User Avatar" className="img-fluid rounded-circle" />
                    </div>
                    <div>
                        <p><strong>Name:</strong> {userData.name}</p>
                        <p><strong>Email:</strong> {userData.email}</p>
                        <p><strong>Username:</strong> {userData.username}</p>
                        {/* Add more user details as needed */}
                    </div>
                </div>
                <div className="col-md-6">
                    <h2>Choose Avatar</h2>
                    <input type="file" onChange={handleAvatarChange} accept="image/png, image/jpeg" />
                </div>
            </div>
        </div>
    );
}

export default UserProfileWithAvatarPicker;
