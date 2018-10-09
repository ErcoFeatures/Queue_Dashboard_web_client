import React , {Component} from 'react'
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
    faUserCircle
} from '@fortawesome/free-solid-svg-icons'

library.add(
    fab,
    faUserCircle
)
const UserAccount = (props) => {
    return (
        <div className="UserAccount">
            <div className="user-avatar">
             <FontAwesomeIcon icon={faUserCircle} />
            </div>
            <div className="user-info">
                <span>{"Trispa Erco"}</span>
                <div>{"MANAGER"}</div>
            </div>

        </div>
    )
}


export default  UserAccount;