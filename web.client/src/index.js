
// React imports
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {connect, Provider} from 'react-redux'
import authAPI from './app/http/auth';
import auth from './app/auth/index';
import "../node_modules/font-awesome/css/font-awesome.min.css";
import {addLocaleData, IntlProvider} from 'react-intl';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';
// Workers
import {register} from './serviceWorker';

// App imports
import './index.css';
import configureStore from "./app/store/configureStore";
import {selectLanguage} from "./app/actions/translation";
import HelmetIntl from "./app/component/helmetIntl";
import Loader from "./app/container/loader";
import Root from "./app/container/layout/Root";

const store = configureStore();
addLocaleData([...en, ...fr]);
register();


const AppBody = ({selectedLanguage, selectedTranslations}, props) => {

    store.dispatch(selectLanguage());

    return (
        <IntlProvider
            key={selectedLanguage}
            locale={selectedLanguage}
            messages={selectedTranslations}
        >
            <div>
                <HelmetIntl messageId='app.name'/>
                <Root/>
            </div>
        </IntlProvider>
    );
}


const mapStateToProps = ({
                             translation: {selectedLanguage, selectedTranslations}
                         }) => ({
    selectedLanguage,
    selectedTranslations
});



const AppBodyWithState = connect(mapStateToProps)(AppBody);
const appLoader = ReactDOM.render(<Loader/>, document.getElementById('apploader'));


appLoader.show();
Promise.all([authAPI.getAuthData(store)]
).then(responses => {
        if(typeof responses === "object")
            auth.parseAuthResponse(responses[0], store);

    }).then(() => {
    ReactDOM.render(
        <Provider store={store}>
            <AppBodyWithState/>
        </Provider>, document.getElementById('root')
    );

    appLoader.hide();

}).catch(error => {
    console.log(error);
    auth.setAuthFailed(store);
    appLoader.hide();
});
