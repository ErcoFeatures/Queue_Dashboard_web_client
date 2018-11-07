//React
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { intlShape } from 'react-intl';

import { Popover, Button} from "react-bootstrap";


class MenuProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            anchorEl: null,
            anchorOriginVertical: 'bottom',
            anchorOriginHorizontal: 'center',
            transformOriginVertical: 'top',
            transformOriginHorizontal: 'center'
        };
    }

    handleRequestClose = () => {
        this.setState({
            open: false
        });
    };
    handleClickButton = ({ currentTarget }) => {
        this.setState({
            open: true,
            anchorEl: currentTarget
        });
    };

    render() {
        const classes = this.props.classes;
        const {
            open,
            anchorEl,
            anchorOriginVertical,
            anchorOriginHorizontal,
            transformOriginVertical,
            transformOriginHorizontal
        } = this.state;
        return (
            <div>
                <Button  onClick={this.handleClickButton}>
                    <img
                        className={"userAvatar"}
                        alt={this.props.name}
                        src={this.props.picture}
                    />
                    <span className={"nameLabelBigScreen"}>
                        {this.props.name}
                    </span>
                </Button>
                <Popover
                    open={open}
                    anchorEl={anchorEl}
                    onClose={this.handleRequestClose}
                    anchorOrigin={{
                        vertical: anchorOriginVertical,
                        horizontal: anchorOriginHorizontal
                    }}
                    transformOrigin={{
                        vertical: transformOriginVertical,
                        horizontal: transformOriginHorizontal
                    }}
                >
                    <span className={"nameLabelSmallScreen"}>
                        {this.props.name}
                    </span>

                        <Button onClick={this.props.onLogout}>
                            <FormattedMessage id="components.header.buttons.logout" />
                        </Button>
                </Popover>
            </div>
        );
    }
}


MenuProfile.contextTypes = {
    intl: intlShape.isRequired
};

export default MenuProfile;