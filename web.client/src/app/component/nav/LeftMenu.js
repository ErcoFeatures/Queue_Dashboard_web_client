import React from 'react'
import  UserAccount from '../UserAccount'
import SubMenu from "../../container/leftSubMenu";


const LeftMenu = (props) => {

    return (
        <div className="LeftMenu">
            <div className="user-profile-container">
                <UserAccount {...props}/>
            </div>
            <div className="sub-menu-part">
                <ul>
                    <SubMenu/>
                </ul>
            </div>
        </div>
    )
}


export default  LeftMenu;