import React, {Component} from 'react';
import Root from './container/layout/Root'
import './App.css';
import {connect, Provider} from 'react-redux'
import {IntlProvider} from 'react-intl';
import ReactDOM from "react-dom";
import Loader from "./container/loader";
import PropTypes from 'prop-types';
import configureStore from "./store/configureStore";

const AppBody = ({selectedLanguage, selectedTranslations, classes}) => (
    <IntlProvider
        key={selectedLanguage}
        locale={selectedLanguage}
        messages={selectedTranslations}
    >
        <Root/>
    </IntlProvider>
);

AppBody.propTypes = {
    classes: PropTypes.object.isRequired
};

const mapStateToProps = ({
                             translation: {selectedLanguage, selectedTranslations}
                         }) => ({
    selectedLanguage,
    selectedTranslations
});

const AppBodyWithState = connect(mapStateToProps)(AppBody);
const appLoader = ReactDOM.render(<Loader/>, document.getElementById('apploader'));
appLoader.show();
const store = configureStore();


const App = () => (
    <Provider store={store}>
        <AppBodyWithState/>
    </Provider>
);
appLoader.hide();


export default App;