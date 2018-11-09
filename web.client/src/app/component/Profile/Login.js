// React
import React from 'react';
import PropTypes from 'prop-types';
import { intlShape, injectIntl } from 'react-intl';
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
                <span>{loginButtonText}</span>
            </div>
        </div>
    );
};

Login.propTypes = {
    onLogin: PropTypes.func.isRequired,
    intl: intlShape.isRequired
};

export default (injectIntl(Login));