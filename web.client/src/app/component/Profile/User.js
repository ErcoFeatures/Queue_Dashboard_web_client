//React import
import React from 'react';
import PropTypes from 'prop-types';
//App imports
import MenuProfile from './MenuProfile';

const User = ({user}) => (
    <MenuProfile
        name={user.LastName + "," + user.FirstName}
        picture={user.picture}
    />
);

User.propTypes = {
    user: PropTypes.shape({
        FirstName: PropTypes.string.isRequired,
        LastName: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired
    })
};

export default User;