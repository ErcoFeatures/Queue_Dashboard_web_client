import React , {Component} from 'react'
import './styles.css'
import QDMenu from '../../container/Menu'
import  UserAccount from '../UserAccount'
const LeftMenu = (props) => {

    return (
        <div className="LeftMenu">
                <UserAccount/>
        </div>
    )
}


export default  LeftMenu;