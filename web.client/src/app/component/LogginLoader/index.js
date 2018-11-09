import React from 'react'
import loader from './loader.gif'
import './styles.css'
import { intlShape, injectIntl } from 'react-intl';
const LoginLoader = ({ intl: { formatMessage }, ...props }) =>{
    const loginLoaderText = formatMessage({
        id: 'components.Loader.Text.logging'
    });
    return (

        <div className="loaderCapsule">
            <img src={loader} style={{width:'100%', height:'100%'}}  alt="loader"/>
            <div  className="loadingText">
                <span>{loginLoaderText}</span>
            </div>
        </div>
    )
}

LoginLoader.propTypes = {
    intl: intlShape.isRequired
};

export default injectIntl(LoginLoader);
