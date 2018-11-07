import React from 'react'
import './styles.css'
import {TextButtonWithIcon} from "../Button";


const LeftMenuItem = (props) => {
    const buttonProps = {
        iconClass: props.iconClassName,
        onclick: () => {

        },
        label: props.label,
        className: "clientItemButton"
    }
    const isActive = props.activeClientID  === props.id;
    return (
        <li className="leftMenuItem" onClick={()=>{props.setActive(props.current)}}>

            <TextButtonWithIcon {...props} {...buttonProps}/>
            {
                isActive && <i className="clientItemArrow fa fa-caret-left"/>
            }


        </li>
    )
};

export default LeftMenuItem