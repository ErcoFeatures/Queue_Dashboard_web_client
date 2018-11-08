//React
import React from 'react';
import {FormattedMessage} from 'react-intl';
import {intlShape} from 'react-intl';

import {Popover, Button} from "react-bootstrap";
import {TextButtonWithIcon} from "../Button";


class MenuProfile extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div>
                <div className="user-avatar text-center">
                    <img
                        className={"userAvatar text-center"}
                        alt={this.props.name}
                        src={this.props.picture}
                    />
                </div>
                <div className={"nameLabelBigScreen text-center pagination-centered"}>
                        {this.props.name}
                </div>

                <TextButtonWithIcon iconClass="fa fa-sign-out"
                                    onClick={this.props.onLogout}
                                    label={<FormattedMessage id="components.header.buttons.logout"/>}
                                    className="loggingOut text-center pagination-centered"/>

            </div>
        );
    }
}


MenuProfile.contextTypes = {
    intl: intlShape.isRequired
};

export default MenuProfile;