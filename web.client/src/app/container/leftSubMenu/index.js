import React, {Component} from 'react'
import {connect} from 'react-redux'
import {FormattedMessage} from "react-intl";
import {TextButtonWithIcon} from "../../component/Button";
import {setActiveQueue} from "../../actions/queues";

class SubMenu  extends Component {

    constructor(props){
        super(props)
    }


    componentDidMount(){
        if(this.props.activeQueue){
            this.props.DoSetActiveQueue(this.props.activeQueue)
        }
    }

    render() {

        return (
            <div className="activeQueue">
                <li>
                    <TextButtonWithIcon iconClass="fa fa-hourglass-half"
                                        onclick={() => {
                                        }}
                                        label={this.props.activeQueue.label}
                                        className="addQueueButton text-center pagination-centered"/>

                </li>

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    DoSetActiveQueue : (data) => dispatch(setActiveQueue(data))
})

const mapStateToProps = ({auth: {userObject}}) => ({
    activeQueue: userObject.userDetails.ListQueue[0]
});


export default connect(mapStateToProps, mapDispatchToProps)(SubMenu);