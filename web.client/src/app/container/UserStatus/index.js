//React
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//App Import
import { login, logout } from '../../actions/auth';
import UserStatus from '../../component/Profile';

const UserStatusComponent = ({ ...props }) => <UserStatus {...props} />;

UserStatusComponent.propTypes = {
    isConnected: PropTypes.bool.isRequired,
    isConnecting: PropTypes.bool.isRequired,
    onLogout: PropTypes.func.isRequired,
    onLogin: PropTypes.func.isRequired
};

const mapStateToProps = ({ auth: { isConnecting, user } }) => ({
    isConnecting,
    isConnected: user.id !== null,
    user
});

const mapDispatchToProps = dispatch => {
    return {
        onLogin: () => dispatch(login()),
        onLogout: () => dispatch(logout())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(
    UserStatusComponent
);