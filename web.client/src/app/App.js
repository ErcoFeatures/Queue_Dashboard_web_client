import React from 'react';
import Root from './container/layout/Root'
import './App.css';
import {connect, Provider} from 'react-redux'
import {IntlProvider} from 'react-intl';
import ReactDOM from "react-dom";
import Loader from "./container/loader";
import { selectLanguage } from './actions/translation';
import configureStore from './store/configureStore';
import { initializeFacebookSDK } from './actions/auth';
import {FB_APP_ID} from '../config/environment'
import HelmetIntl from './component/helmetIntl/';


const store = configureStore();

store.dispatch(selectLanguage());
store.dispatch(initializeFacebookSDK());


const AppBody = ({selectedLanguage, selectedTranslations}) => (
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


const mapStateToProps = ({
                             translation: {selectedLanguage, selectedTranslations}
                         }) => ({
    selectedLanguage,
    selectedTranslations
});


console.log( "FB=>", FB_APP_ID);

const AppBodyWithState = connect(mapStateToProps)(AppBody);
const appLoader = ReactDOM.render(<Loader/>, document.getElementById('apploader'));

appLoader.show();

const App = () => (
    <Provider store={store}>
        <AppBodyWithState/>
    </Provider>
);
appLoader.hide();


export default App;