//React
import React from 'react';
import {intlShape} from 'react-intl';



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
                <div className={"text-center pagination-centered"}>
                        {""}
                </div>

            </div>
        );
    }
}


MenuProfile.contextTypes = {
    intl: intlShape.isRequired
};

export default MenuProfile;