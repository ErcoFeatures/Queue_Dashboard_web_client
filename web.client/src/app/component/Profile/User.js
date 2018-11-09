//React import
import React from 'react';
import PropTypes from 'prop-types';
//App imports
import MenuProfile from './MenuProfile';

const User = ({ user, onLogout }) => (
    <MenuProfile
        name={user.firstName}
        picture={user.picture}
    />
);

User.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired
    })
};

export default User;