import React from 'react';
import './styles.css'
import User from './User';
const UserStatus = ({ user, onLogout }) => {
        return <User user={user} onLogout={onLogout} />;
};


export default UserStatus;