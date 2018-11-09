import React, { Component } from "react";
import Header from "../Header/index";
import Home from '../pages/Home'
import About from '../pages/About'
import ContactUs from "../pages/ContactUs";
import { Route, Router, Switch, HashRouter,Redirect } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import PropTypes from "prop-types";
import LoginRedirect from "../pages/Login";
import connect from "react-redux/es/connect/connect";
import Login from "../../component/Profile/Login";
import {login, logout} from "../../actions/auth";
import StartPage from "./Start";
import LoginLoader from "../../component/LogginLoader";

const history = createHistory();

const AuthRoute = ({ component: Component, state, onLogin, ...rest }) => {

    if (rest.isConnecting) {
        return (
            <Route {...rest} render={props => <StartPage>
                <LoginLoader {...props}/>
            </StartPage>} />

        )
    } else if (rest.isConnected) {
        return (
            <div>
                <Header />
                <Route {...rest} render={props => <Component {...props} reportType={rest.reportType}/>} />
            </div>
        );
    } else {
        return  <Route {...rest} render={props =><StartPage> <Login onLogin={onLogin} {...props} /></StartPage>} />;
    }

};

const checkPagePermission = () => {
    // TODO : handle the page permissions
    return true;
};

class Root extends Component {
    render() {


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
                            {...this.props}
                        />
                        <AuthRoute
                            pageName="About"
                            path="/apropos*"
                            component={About}
                            {...this.props}
                        />
                        <AuthRoute
                            pageName="contact"
                            path="/contact*"
                            component={ContactUs}
                            {...this.props}
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


Root.propTypes = {
    isConnected: PropTypes.bool.isRequired,
    isConnecting: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ auth: { isConnecting, user } }) => ({
    isConnecting,
    isConnected: user.id !== null,
    user
});

const mapDispatchToProps = dispatch => {
    return {
        onLogin: () => dispatch(login()),
        onLogout: () => dispatch(logout())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Root);
