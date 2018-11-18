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
import {doLogout} from "../../actions/auth";
import StartPage from "./Start";

const history = createHistory();

const AuthRoute = ({ component: Component, state, ...rest }) => {

    if (rest.userObject &&  rest.userObject.isAuthenticated) {
        return (
            <div>
                <Header  {...rest}/>
                <Route {...rest} render={props => <Component {...props} reportType={rest.reportType}/>} />
            </div>
        );
    } else {
        return  <Route {...rest} render={props =><StartPage> <Login  {...props} /></StartPage>} />;
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



const mapStateToProps = ({ auth: { userObject } }) => {
    return{
        userObject
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onLogout: (data) => dispatch(doLogout(data))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Root);
