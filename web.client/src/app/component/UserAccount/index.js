import React from 'react'
import './styles.css'
import UserStatus from '../../container/UserStatus';

const UserAccount = (props) => {
    return (
        <div className="UserAccount text-center pagination-centered">
            <UserStatus {...props}/>
        </div>
    )
}

export default  UserAccount;