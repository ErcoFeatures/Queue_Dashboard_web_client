
// React imports
import React from 'react';
import ReactDOM from 'react-dom';
import {IntlProvider} from 'react-intl';
import {connect, Provider} from 'react-redux';
import configureStore from './store/configureStore';
import './index.css';

// module imports
// import '../node_modules/bootstrap-css-only/css/bootstrap.min.css';
// import './css/style.css';
// import "../node_modules/font-awesome/css/font-awesome.min.css";
import Root from './container/layout/Root';
import Loader from './container/loader';


const appLoader = ReactDOM.render(<Loader/>, document.getElementById('apploader'));
appLoader.show();
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Root/>
    </Provider>, document.getElementById('root')
);


appLoader.hide();