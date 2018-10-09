import React, { Component } from "react";
import LoadingBar from "react-loading-bar";
import "react-loading-bar/dist/index.css";

export default class Loader extends Component {
    constructor() {
        super();
        this.state = {
            show: true
        };
    }
    show = () => {
        this.setState({ show: true });
    };

    hide = () => {
        this.setState({ show: false });
    };
    render() {
        return (
            <div>
                <LoadingBar show={this.state.show} color="blue" />
            </div>
        );
    }
}
