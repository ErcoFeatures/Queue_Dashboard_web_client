
// React imports
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import authAPI from './app/http/auth';
import auth from './app/auth/index';
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';
// Workers
import {register} from './serviceWorker';

// App imports
import App from './app/App';
import './index.css';
import configureStore from "./app/store/configureStore";

const store = configureStore();
addLocaleData([...en, ...fr]);
register();

const renderRoot = () => {
    ReactDOM.render(
        <App store = {store} />, document.getElementById('root')
    );
};


Promise.all([authAPI.getAuthData(store)]
).then(responses => {
        auth.parseAuthResponse(responses[0], store);

    }).then(() => {
        store.subscribe(renderRoot);

}).catch(error => {
    console.log(error);
    auth.setAuthFailed(store);
});
