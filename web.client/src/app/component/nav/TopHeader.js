import React from 'react'
import {TextButtonWithIcon} from "../Button";

const TopHeader = (props) => {

    return (
        <div className="topHearContent">
            <div className="appName pull-left">
                <i className="fa fa-dashcube"> {"QUEUE_DASHBOARD"}</i>
            </div>

            <div className="pull-right">
                <TextButtonWithIcon iconClass="fa fa-plus-circle"
                                    onclick={() => {}}
                                    label='Ajouter un client'
                                    className="addClientButton"/>
            </div>

        </div>
    )
};


export default TopHeader;