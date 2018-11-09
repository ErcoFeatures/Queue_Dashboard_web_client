//React
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import UserStatus from '../../component/Profile';

const UserStatusComponent = ({ ...props }) => <UserStatus {...props} />;

UserStatusComponent.propTypes = {
    isConnected: PropTypes.bool.isRequired,
    isConnecting: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ auth: { isConnecting, user } }) => ({
    isConnecting,
    isConnected: user.id !== null,
    user
});



export default connect(mapStateToProps, null)(
    UserStatusComponent
);