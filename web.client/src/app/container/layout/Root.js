import React, { Component } from "react";
import Header from "../Header/index";
import Home from '../pages/Home'
import About from '../pages/About'
import ContactUs from "../pages/ContactUs";
import { Route, Router, Switch, BrowserRouter, HashRouter,Redirect } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import PropTypes from "prop-types";
import LoginRedirect from "../pages/Login";
import UnAuth from "../pages/Unauthorizedaccess";

const history = createHistory();

const AuthRoute = ({ component: Component, state, ...rest }) => {

    if (rest.maintenance || checkPagePermission()) {
        return (
            <div>
                <Header />
                <Route {...rest} render={props => <Component {...props} reportType={rest.reportType}/>} />
            </div>
        );
    } else {
        return <Route {...rest} render={props => <UnAuth {...props} />} />;
    }

};

const checkPagePermission = () => {
    // TODO : handle the page permissions
    return true;
};

class Root extends Component {
    render() {
        let state = this.context.store.getState();

        if (checkPagePermission()) {
            return (
                <HashRouter>
                    <Switch>
                        <Redirect exact from="/" to="QueueDashboard" />
                        <AuthRoute
                            pageName="Home"
                            exact
                            path="/QueueDashboard"
                            component={Home}
                        />
                        <AuthRoute
                            pageName="About"
                            path="/apropos*"
                            component={About}
                        />
                        <AuthRoute
                            pageName="contact"
                            path="/contact*"
                            component={ContactUs}
                        />

                    </Switch>
                </HashRouter>
            );
        } else {
            return (
                <div>
                    <Router history={history}>
                        <Route path="/" component={LoginRedirect} />
                    </Router>
                </div>
            );
        }
    }
}

Root.contextTypes = {
    store: PropTypes.object
};

export default Root;
