//React
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import UserStatus from '../../component/Profile';

const UserStatusComponent = ({ ...props }) => <UserStatus {...props} />;


const mapStateToProps = ({ auth: { userObject } }) => ({
    userObject
});



export default connect(mapStateToProps, null)(
    UserStatusComponent
);