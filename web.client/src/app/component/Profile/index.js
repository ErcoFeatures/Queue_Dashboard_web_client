import React from 'react';
import './styles.css'
import User from './User';
const UserStatus = ({ userObject , onLogout}) => {
        return <User user={userObject.userDetails} onLogout={onLogout} />;
};


export default UserStatus;