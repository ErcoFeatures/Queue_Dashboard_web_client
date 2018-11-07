// React
import React from 'react';
import PropTypes from 'prop-types';
import { intlShape, injectIntl } from 'react-intl';
import {Button} from '../../component/Button'
import './styles.css'
const Login = function({ intl: { formatMessage }, ...props }) {
    const loginButtonText = formatMessage({
        id: 'components.header.buttons.login'
    });

    return (
        <div>
            <span
                color="inherit"
                onClick={props.onLogin}
                aria-label={loginButtonText}
                className={"toolbarButtonWithoutText"}
            >
                <i className='fa fa-user-circle-o' />
            </span>
            <Button
                color="inherit"
                onClick={props.onLogin}
                aria-label={loginButtonText}
                className={"toolbarButtonWithText"}
            >
                <i className='fa fa-user-circle-o' />
                <span>{loginButtonText}</span>
            </Button>
        </div>
    );
};

Login.propTypes = {
    onLogin: PropTypes.func.isRequired,
    intl: intlShape.isRequired
};

export default (injectIntl(Login));