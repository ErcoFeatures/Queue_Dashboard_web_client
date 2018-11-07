import React from 'react'
import './styles.css'
import UserStatus from '../../container/UserStatus';

const UserAccount = (props) => {
    return (
        <div className="UserAccount">
            <div className="user-avatar">
             <i className='fa fa-user-circle-o' />
            </div>
            <div className="user-info">
                <UserStatus/>
            </div>

        </div>
    )
}

export default  UserAccount;