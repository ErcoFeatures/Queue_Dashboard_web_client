import React from 'react'
import {TextButtonWithIcon} from "../Button";
import {FormattedMessage} from "react-intl";

const TopHeader = (props) => {

    return (
        <div className="topHearContent">
            <div className="appName pull-left">
                <i className="fa fa-dashcube fa-rotate-90"> </i>{"UEUE_DASHBOARD"}
            </div>

            <div className="pull-right">
                <TextButtonWithIcon iconClass="fa fa-plus-circle"
                                    onclick={ () => {props.setShowNewQueueForm(true)}}
                                    label={<FormattedMessage id="components.header.buttons.addQueue"/>}
                                    className="addQueueButton text-center pagination-centered"/>
                <div className="inline-block vertical-align-middle margin-left-20  menuItemRightDivider margin-right-20"></div>

                <TextButtonWithIcon iconClass="fa fa-sign-out"
                                    onclick={ () => { props.onLogout("logout")}}
                                    label={<FormattedMessage id="components.header.buttons.logout"/>}
                                    className="loggingOut text-center pagination-centered"/>

            </div>

        </div>
    )
};


export default TopHeader;