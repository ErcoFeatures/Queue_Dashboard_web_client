import React from 'react'
import  UserAccount from '../UserAccount'


const LeftMenu = (props) => {

    return (
        <div className="LeftMenu">
            <div className="user-profile-container">
                <UserAccount/>
            </div>
            <div className="sub-menu-part">
            </div>
        </div>
    )
}


export default  LeftMenu;