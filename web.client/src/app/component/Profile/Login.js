// React
import React from 'react';
import PropTypes from 'prop-types';
import { intlShape, injectIntl } from 'react-intl';
import {Link} from 'react-router-dom'
import Config from '../../profiles'
import './styles.css'
const Login = function({ intl: { formatMessage }, ...props }) {
    const loginButtonText = formatMessage({
        id: 'components.header.buttons.login'
    });

    return (
        <div className="loginContainer text-center">

            <div className="logoContainer">
                <i className="fa fa-dashcube fa-rotate-90"> </i>{"UEUE_DASHBOARD"}
            </div>

            <div  className="LoginButton" onClick={props.onLogin}>
                <Link to={Config.loginURL}>{loginButtonText}</Link>
            </div>
        </div>
    );
};

Login.propTypes = {
    intl: intlShape.isRequired
};

export default (injectIntl(Login));