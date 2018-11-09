import React from 'react'
import QDNav from '../../component/nav'
import {connect} from 'react-redux'


//App Import
import { login, logout } from '../../actions/auth';

 const Header = (props) => {
    return (
        <div>
            <QDNav {...props}/>
        </div>
    )
 }


const mapDispatchToProps = dispatch => {
    return {
        onLogin: () => dispatch(login()),
        onLogout: () => dispatch(logout())
    };
};

 export default  connect(null, mapDispatchToProps)(Header);